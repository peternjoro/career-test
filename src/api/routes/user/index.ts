import { FastifyPluginAsync } from "fastify";

const routes:FastifyPluginAsync = async fastify => {
    fastify.get('/', {
        schema: {
            tags: ["User"],
            summary: "Users routes",
            description: "View users routes"
        }
    },
    async (req,res) => {
        return {
          message: "Success",
          data: {
            timestamp: Date.now(),
          },
        }
    })
}

export default routes;