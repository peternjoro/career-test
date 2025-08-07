import { FastifyPluginAsync } from "fastify";
import { Type } from "@sinclair/typebox";
import { ExampleRequest, ExampleRequestSchema } from "../../../types/ExampleRequest";
import {
  ExampleResponse,
  ExampleResponseSchema,
} from "../../../types/ExampleResponse";
import { ErrorResponse, ErrorResponseSchema } from "../../../types/ErrorResponse";

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["Test"],
        description: "Welcome endpoint",
        response: {
          200: Type.String(),
          400: ErrorResponseSchema,
          500: ErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      try {
        return "Welcome to Fastify Template API!";
      } catch (error) {
        reply.status(500).send({
          statusCode: 500,
          error: "Internal Server Error",
          message: "An unexpected error occurred",
        });
      }
    }
  );

  fastify.post<{
    Body: ExampleRequest;
    Reply: ExampleResponse | ErrorResponse;
  }>(
    "/example",
    {
      schema: {
        tags: ["Test"],
        description: "Example endpoint",
        body: ExampleRequestSchema,
        response: {
          200: ExampleResponseSchema,
          400: ErrorResponseSchema,
          500: ErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      try {
        const { name, age } = request.body;

        // Example validation
        if (age < 0 || age > 150) {
          return reply.status(400).send({
            statusCode: 400,
            error: "Bad Request",
            message: "Age must be between 0 and 150",
          });
        }

        return {
          message: "Success",
          data: {
            name,
            age,
            timestamp: Date.now(),
          },
        };
      } catch (error) {
        reply.status(500).send({
          statusCode: 500,
          error: "Internal Server Error",
          message: "An unexpected error occurred",
        });
      }
    }
  );
};

export default routes;
