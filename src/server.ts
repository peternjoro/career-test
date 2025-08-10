import fastify from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import compress from "@fastify/compress";
import cors from "@fastify/cors";
import 'dotenv/config';
// for adding security headers
import Helmet from "@fastify/helmet";


//* adding authenticate property to FastifyInstance
declare module 'fastify' {
    export interface FastifyInstance {
        authenticate: any
    }
}

/**
 * For https, Consider the trustProxy setting for fastify. If your app will be deployed behind a proxy such as 
 * Heroku or an API gateway, then set trustProxy to true.
 */
const app = fastify({
    trustProxy: true,
    ajv: {
        customOptions: {
            strict: "log",
            keywords: ["kind", "modifier"],
        },
    },
    /* https: {
        ca: fs.readFileSync(path.join(__dirname,'./public/ssl/BaltimoreCyberTrustRoot.crt.pem'))
    } */
});

// register the @fastify/compress plugin
app.register(compress);

// plug in security headers - apply helmet to all routes
app.register(Helmet, {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: [`'self'`],
            frameSrc: [`'self'`],
            scriptSrc: [
                `'self'`,
                `https: 'unsafe-inline'`,
                'http://localhost:2000'
            ],
            fontSrc: [
                `'self'`,
                'https://www.gstatic.com',
                'https://fonts.gstatic.com',
                'https://fonts.googleapis.com'
            ],
            connectSrc: [
                `'self'`,
                'https://unpkg.com'
            ],
            imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
            styleSrc: [
                `'self'`,
                `'unsafe-inline'`,
                'https://www.gstatic.com',
                'https://fonts.googleapis.com',
                'https://unpkg.com'
            ]
        }
    }
});

//disable cors
app.register(cors,{
    origin: true,
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS'], // 'DELETE',
    allowedHeaders: ['Content-Type', 'Authorization','x-api-key']
});


app.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
    const api_key = req.headers['x-api-key']??'';
    if (!api_key) {
        return reply.status(401).send({ success:false, message:'Authentication required' })
    }
    try {
        if(api_key != process.env.API_KEY){
            return reply.status(401).send({ success:false, message:'Authentication required' })
        }
    }
    catch (error:any) {
        const errorCode:string = error.code;
        console.log(`[errorCode] =>`,errorCode);
        let errorMessage = 'Authentication error';
        if(error.message == "The token is malformed."){
            errorMessage = "Authentication type required is Authorization: Bearer [token]";
        }
        else {
            switch(errorCode)
            {
                case 'FAST_JWT_MALFORMED':
                    errorMessage = 'Invalid authorization token';
                    break;
                case 'FAST_JWT_EXPIRED':
                    errorMessage = 'Session expired';
                    break;
            }
        }

        return reply.status(400).send({ success:false, message:errorMessage })
    }
});

// cookies - using @fastify/cookie
/*fastify.register(fCookie, {
    secret: 'some-secret-key',
    hook: 'preHandler',
})*/

app.register(import('./app'));

//default route handler
app.get('/', function (req, reply) {
    reply.send({ status:true, message:"Server is alive ...",  })
});

// graceful shutdown
const listeners = ['SIGINT', 'SIGTERM']
listeners.forEach((signal) => {
    process.on(signal, async () => {
        await app.close()
        process.exit(0)
    })
})

// start server
app.listen({ port: Number(process.env.SVR_PORT || "2000"), host: "0.0.0.0" }, (err: any, address: string) => {
    if (err) {
        console.log(err);
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on: ${address}`);
    console.log(`API documentation available at ${address}/docs`);
})