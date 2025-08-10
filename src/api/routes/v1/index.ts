import { FastifyPluginAsync } from "fastify";

const routes:FastifyPluginAsync = async fastify => {

    //*default route handler - for all unmatched routes in this block
    fastify.get("/",{
            schema: {
                hide:true
            }
        },
        async (req, res) => {
        res.code(200).send({ success:true, message:"Take a Psychometric Test" });
    })
}
export default routes;