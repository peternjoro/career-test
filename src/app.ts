import { join } from "path";
import AutoLoad from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import dotenv from "dotenv";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import Config from "./config";


const app: FastifyPluginAsync = async (fastify): Promise<void> => {

    dotenv.config();

    await fastify.register(swagger, {
        openapi: {
            info: {
                title: "Career Test API",
                description: "Career Test API documentation",
                version: "1.0.0",
            },
            servers: [
                {
                    url: Config.API_BASE_URL,
                },
            ],
        },
    });

    await fastify.register(swaggerUi, {
        routePrefix: "/docs",
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
    });

    // This loads all plugins defined in routes
    fastify.register(AutoLoad, {
        dir: join(__dirname, "api/routes"),
        //options: Object.assign({ prefix: '/server' }, opts), // Prefix all routes with '/server'
    });
}

export default app;
export { app };
