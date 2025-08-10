import { FastifyPluginAsync } from "fastify";

//* this will be loaded as user/:id/actions.tsimport { FastifyPluginAsync } from "fastify";
const routes:FastifyPluginAsync = async fastify => {
  fastify.get('/', {
    schema: {
      hide:true,
      tags: ["User"],
      summary: "User routes",
      description: "View user routes"
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