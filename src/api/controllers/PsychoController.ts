import { getRandomNumber, quizArrayDifference, shuffleArray } from "../../lib/utils";
import { PsychometricTestQnsv2, PsychometricTestQuizes } from "../../lib/data/psycho-test";
import {
    CacheTestResult,
    INT_CODE_Type,
    NetScore,
    NextQuizType,
    PsychoTestAnswerRequest,
    Qnsype,
    RIASECResultV1
} from "../../types/psycho.test";
import { PsychoTestCache } from "../../lib/cache/psycho-test";

const TestCache = new PsychoTestCache();


type RIASECResultsType = Record<INT_CODE_Type, RIASECResultV1>;

type TestResultsType = {
    success: boolean;
    message: string;
    testResults: CacheTestResult[] | null;
}

export class PsychoController
{
    private static instance:PsychoController;
    private qsns = PsychometricTestQnsv2;
    private quizes:Array<number> = PsychometricTestQuizes();

    constructor(){
        if(!!PsychoController.instance){
            return PsychoController.instance;
        }

        PsychoController.instance = this;
        return this;
    }

    private getQuiz = (filterOption: {index?:number,qnsNo?:number}): Qnsype | null => {
        if(filterOption.index){
            return this.qsns[filterOption.index];
        }
        if(filterOption.qnsNo){
            const results = this.qsns.find(obj => obj.qsn == filterOption.qnsNo);
            if(results){
                return results;
            }
        }
        return null;
    }

    /**
     * Start Psychometric Test, return the first question
     * @param userId 
     */
    public startQuiz = () => {
        const shaffledQuizes = shuffleArray(this.quizes);
        const qsnRslt = this.getQuiz({qnsNo:shaffledQuizes[0]});
        return qsnRslt;
    }

    public answerQuiz = (userId:string,result:PsychoTestAnswerRequest) => {
        //update user cache
        TestCache.set(userId,result);
    }

    public nextQuiz = (userId:string):NextQuizType => {
        //taken quizes so far
        const answeredQuizs = [...TestCache.getAnsweredQuizs(userId)];
        const unAnsweredQuizs = quizArrayDifference(this.quizes,answeredQuizs);
        if(unAnsweredQuizs.length == 0){
            return { endOfTest:true, qsnRslt:null }
        }

        const shaffledQuizes = shuffleArray(unAnsweredQuizs);
        //return the next quiz
        const qsnRslt = this.getQuiz({qnsNo:shaffledQuizes[0]});
        return { endOfTest: false, qsnRslt }
    }

    public testResults = (userId:string): TestResultsType => {
        let results = { success:false, message:'No test found',testResults:null }
        
        const answeredQuizs = TestCache.getAnsweredQuizs(userId);
        if(answeredQuizs.length == 0){
            return results;
        }

        //check that test is fully completed
        if(answeredQuizs.length != this.quizes.length){
            results.message = "Test not complete";
            return results;
        }

        const rslts = TestCache.getTestResults(userId);
        if(!rslts){
            results.message = "No test found";
            return results;
        }

        return { success:true, message:'success', testResults:rslts }
    }

    public analyzeResults = (userId:string,results:CacheTestResult[]) => {
        //const resultMap = new Map<INT_CODE_Type,RIASECResult>();
        const resultMap = new Map<INT_CODE_Type,number>();
        for (let i = 0; i < results.length; i++){
            const obj = results[i];
            const code = obj.INT_CODE;
            const score = obj.score;
            if(resultMap.has(code)){
                const curScore = resultMap.get(code);
                if(curScore != undefined){
                    if(score > 0){
                        resultMap.set(code,(curScore + score));
                    }
                }
            }
            else {
                resultMap.set(code,score);
            }
        }
        //const rslts = Array.from(resultMap);
        //const rslts = Object.fromEntries(resultMap);
        //console.log(`[rslts] =>`,rslts);

        let netScore:NetScore[] = [];
        if(resultMap.size > 0){
            const totalCodeScore = 40;
            //find the percentage score
            for (const [key, value] of resultMap) {
                const perc = (value/totalCodeScore) * 100;
                netScore.push({
                    code: key,
                    score: value,
                    perc: Math.round(perc * 10) / 10
                })
            }
            //sort scores in descending order
            netScore.sort((a, b) => b.score - a.score);
        }
        TestCache.clearResults(userId);

        return netScore;
    }
}