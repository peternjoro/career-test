import { getRandomNumber, quizArrayDifference, shuffleArray } from "../../lib/utils";
import { PsychometricTestQns, PsychometricTestQuizes } from "../../lib/data/psycho-test";
import {
    CacheTestResult,
    INT_CODE_Type,
    NetScore,
    NextQuizType,
    PsychoTestAnswerRequest,
    Qnsype,
    RIASECResult
} from "../../types/psycho.test";
import { PsychoTestCache } from "../../lib/cache/psycho-test";

const TestCache = new PsychoTestCache();


type RIASECResultsType = Record<INT_CODE_Type, RIASECResult>;

export class PsychoController
{
    private static instance:PsychoController;
    private qsns = PsychometricTestQns;
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
        //console.log(`----------`);
        const answeredQuizs = [...TestCache.getAnsweredQuizs(userId)];
        //console.log(`[answeredQuizs] =>`,answeredQuizs);
        const answeredRslt = TestCache.getTestResults(userId);
        //console.log(`[answeredRslt] =>`,answeredRslt);
        const unAnsweredQuizs = quizArrayDifference(this.quizes,answeredQuizs);
        //console.log(`[unAnsweredQuizs] =>`,unAnsweredQuizs);
        if(unAnsweredQuizs.length == 0){
            return { endOfTest: true, qsnRslt: null }
        }

        const shaffledQuizes = shuffleArray(unAnsweredQuizs);
        //return the next quiz
        const qsnRslt = this.getQuiz({qnsNo:shaffledQuizes[0]});
        return { endOfTest: false, qsnRslt }
    }

    public testResults = (userId:string) => {
        return TestCache.getTestResults(userId);
    }

    public analyzeResults = (userId:string,results:CacheTestResult[]) => {
        const resultMap = new Map<INT_CODE_Type,RIASECResult>();
        for (let i = 0; i < results.length; i++){
            const obj = results[i];
            const code = obj.INT_CODE;
            let postve = false;
            let negtve = false;
            if(obj.ans == "Agree") postve = true;
            if(obj.ans == "Disagree") negtve = true;
            if(resultMap.has(code)){
                const curRslts = resultMap.get(code);
                if(curRslts){
                    if(postve) curRslts.positive++;
                    if(negtve) curRslts.negative++;
                    resultMap.set(code,curRslts);
                }
            }
            else {
                resultMap.set(code,{
                    positive: postve ? 1 : 0,
                    negative: negtve ? 1 : 0
                });
            }
        }

        let netScore:NetScore[] = [];
        if(resultMap.size > 0){
            //find the net score, positive - negative for each code
            for (const [key, value] of resultMap) {
                netScore.push({
                    code: key,
                    score: value.positive - value.negative
                })
            }
            //sort scores in descending order
            netScore.sort((a, b) => b.score - a.score);
        }

        return netScore;
    }
}