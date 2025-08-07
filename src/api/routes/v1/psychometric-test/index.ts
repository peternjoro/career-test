import { FastifyPluginAsync } from "fastify";
import {
  startPsychometricTest,
  patchPsychometricTestAnswer,
  psychometricTestResults
} from "../../../routeHandlers/psychoTest";
import { PsychoTestSchema, PsychoTestAnswerSchema, UserIDQueryParam } from "../../../../types/psycho.test";

const routes:FastifyPluginAsync = async fastify => {
  fastify.post('/start', {
    schema: {
      tags: ["Psycho Test"],
      //summary: "Psychometric Test",
      description: "Take a Psychometric Test",
      body: PsychoTestSchema
    },
    //preHandler:
    handler: startPsychometricTest
  })

  fastify.patch('/:id/answer',{
    schema: {
        tags: ["Psycho Test"],
        //summary: "Psychometric Test",
        description: "Submit an answer",
        params: UserIDQueryParam,
        body: PsychoTestAnswerSchema
    },
    //preHandler:
    handler: patchPsychometricTestAnswer
  })

  fastify.get('/:id/results',{
    schema: {
      tags: ["Psycho Test"],
      //summary: "Test Results",
      description: "Test Results",
      params: UserIDQueryParam
    },
    //preHandler:
    handler: psychometricTestResults
  })

  //*default route handler - for all unmatched routes
  fastify.get("/", async (req, res) => {
    res.code(200).send({ success:true, message:"Take a Psychometric Test" });
  })
}

export default routes;

