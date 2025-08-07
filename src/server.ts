import { join } from "path";
import fastify from "fastify";
import AutoLoad from "@fastify/autoload";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import Config from "./config";


export async function buildServer() {
  const server = fastify({
    logger: false,
  }).withTypeProvider<TypeBoxTypeProvider>();

  await server.register(swagger, {
    openapi: {
      info: {
        title: "Fastify Template API",
        description: "API documentation using Swagger",
        version: "1.0.0",
      },
      servers: [
        {
          url: Config.API_BASE_URL,
        },
      ],
    },
  });

  await server.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
  });

  // Register routes
  //await server.register(import("./routes/test/routes"));
  
  // load all plugins defined in routes folder
  server.register(AutoLoad, {
    dir: join(__dirname, "api/routes"),
    //options: Object.assign({ prefix: '/server' }, opts), // Prefix all routes with '/server'
  });

  return server;
}

export type FastifyServer = Awaited<ReturnType<typeof buildServer>>;
