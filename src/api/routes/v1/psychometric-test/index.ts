import { FastifyPluginAsync } from "fastify";
import {
  startPsychometricTest,
  patchPsychometricTestAnswer,
  psychometricTestResults,
  RIASECResultCodeMapping
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
    preHandler: fastify.authenticate,
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
    preHandler: fastify.authenticate,
    handler: patchPsychometricTestAnswer
  })

  fastify.get('/:id/results',{
    schema: {
      tags: ["Psycho Test"],
      //summary: "Test Results",
      description: "Test Results",
      params: UserIDQueryParam
    },
    preHandler: fastify.authenticate,
    handler: psychometricTestResults
  })

  fastify.get('/riasec_result_code_mapping',{
    schema: {
      tags: ["Psycho Test"],
      description: "RIASEC results code mapping"
    },
    preHandler: fastify.authenticate,
    handler: RIASECResultCodeMapping
  })

  //*default route handler - for all unmatched routes in this block
  fastify.get("/", async (req, res) => {
    res.code(200).send({ success:true, message:"Take a Psychometric Test" });
  })
}

export default routes;

