import { FastifyReply, FastifyRequest } from "fastify";
import Config from "../../config";
import {
    PsychoQuizResponse,
    PsychoTestAnswerRequest,
    PsychoTestRequest,
    UserIDQueryParamType
} from "../../types/psycho.test";
import { PsychoController } from "../controllers/PsychoController";
import { SampleResults } from "../../lib/data/psycho-test";


const Controller = new PsychoController();

const defaultQuizResponse:PsychoQuizResponse = {
    success: true,
    message: 'success',
    endOfTest: false,
    question: '',
    answer_format: {
        method: 'PATCH',
        endpoint: '',
        request_body: {
            qsn: 0,
            ans: 'Agree or Disagree'
        }
    }
}

export async function startPsychometricTest(
    req: FastifyRequest<{ Body: PsychoTestRequest }>,
    reply: FastifyReply) {
    const { userId } = req.body;

    const startingQuiz = Controller.startQuiz();
    if(!startingQuiz){
        return reply.code(500).send({
            success: false,
            message: "Something wrong happened",
        })
    }

    const question = startingQuiz.text;
    const qnsNo = startingQuiz.qsn;

    const responsePath = `${Config.API_BASE_URL}/v1/psychometric-test/${userId}/answer`;

    const resp = {...defaultQuizResponse};
    resp.question = question;
    resp.answer_format.endpoint = responsePath;
    resp.answer_format.request_body.qsn = qnsNo;

    return resp;
}

export async function patchPsychometricTestAnswer(
    req: FastifyRequest<{ Params: UserIDQueryParamType, Body: PsychoTestAnswerRequest }>,
    reply: FastifyReply) {
    const { id } = req.params;
    const payload = req.body;

    const answerQuiz = Controller.answerQuiz(id,payload);
    const nextQuizResp = Controller.nextQuiz(id);

    if(nextQuizResp.endOfTest){
        const resultsUrl = `${Config.API_BASE_URL}/v1/psychometric-test/${id}/results`;
        return reply.code(200).send({
            success: true,
            message: 'success',
            endOfTest: true,
            results_url: resultsUrl
        })
    }

    const question = nextQuizResp.qsnRslt?.text??'';
    const qnsNo = nextQuizResp.qsnRslt?.qsn??0;

    const responsePath = `${Config.API_BASE_URL}/v1/psychometric-test/${id}/answer`;

    const resp = {...defaultQuizResponse};
    resp.question = question;
    resp.answer_format.endpoint = responsePath;
    resp.answer_format.request_body.qsn = qnsNo;

    return reply.code(200).send(resp)
}

export async function psychometricTestResults(
    req: FastifyRequest<{ Params: UserIDQueryParamType }>,
    reply: FastifyReply) {
    const { id } = req.params;

    const results = Controller.testResults(id);
    if(!results){
        const startTest = `${Config.API_BASE_URL}/v1/psychometric-test/start`;
        return reply.code(200).send({
            success: false,
            message: 'User has not taken a test',
            startTestUrl: startTest
        })
    }

    const rslts = Controller.analyzeResults(id,SampleResults);
    //Object.fromEntries(rslts)

    return reply.code(200).send({ success:true, results:rslts })
}