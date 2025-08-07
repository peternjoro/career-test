import { CacheTestResult, INT_CODE_Type } from "../../types/psycho.test";
import { PsychoQuizCode } from "../data/psycho-test";

type ANS_TYPE = "Agree" | "Disagree";

type TestResult = {
    qsn: number;
    ans: ANS_TYPE;
}

type TestCache = {
    userId:string;
    answeredQuizs: Array<number>;
    testResults: CacheTestResult[];
}

export class PsychoTestCache
{
    private static instance:PsychoTestCache;
    private cache:TestCache[] = [];

    constructor(){
        if(!!PsychoTestCache.instance){
            return PsychoTestCache.instance;
        }

        PsychoTestCache.instance = this;
        return this;
    }

    //public recordExixts
    private updateTestResult = (userId:string,testResults:CacheTestResult[],result:TestResult,code:INT_CODE_Type):void => {
        const qsn = result.qsn;
        const ans = result.ans;
        if(qsn > 0 && ans){
            const userIndex = this.cache.findIndex(obj => obj.userId == userId);
            if(userIndex != -1){
                console.log(`user results found ...`);
                let quizFound = false;
                const updatedResults = [...testResults].map(rslt => {
                    if(rslt.qsn == qsn){
                        quizFound = true;
                        return {...rslt, ans }
                    }
                    return rslt;
                });
                if(!quizFound){
                    const quizRslts = {...result, INT_CODE:code}
                    updatedResults.push(quizRslts);
                }

                const answeredQsns = [...this.cache[userIndex].answeredQuizs,qsn];
                this.cache[userIndex].answeredQuizs = answeredQsns;
                this.cache[userIndex].testResults = updatedResults;
            }
        }
    }

    public set = (userId:string,result:TestResult): void => {
        //check record exists in the cache
        const qnsNo = result.qsn;
        const userTestResults = this.getTestResults(userId);
        const code = PsychoQuizCode(qnsNo);
        if(code){
            if(userTestResults && userTestResults.length > 0){
                //update ans
                this.updateTestResult(userId,userTestResults,result,code);
            }
            else {
                const initialRslts = [{
                    ...result,
                    INT_CODE: code
                }]
                //set user
                this.cache.push({
                    userId,
                    answeredQuizs: [qnsNo],
                    testResults: initialRslts
                })
            }
        }
    }

    public get = (userId:string): TestCache | null => {
        const results = this.cache.find(user => user.userId == userId);
        if(results){
            return results;
        }
        return null;
    }

    public getTestResults = (userId:string): CacheTestResult[] | null => {
        const results = this.get(userId);
        if(results){
            return results.testResults;
        }
        return null;
    }

    public getAnsweredQuizs = (userId:string): Array<number> => {
        const results = this.get(userId);
        if(results){
            return results.answeredQuizs;
        }
        return [];
    }
}