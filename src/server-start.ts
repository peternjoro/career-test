import Config from "./config";
import { buildServer } from "./server";

const start = async () => {
  const server = await buildServer();

  try {
    const base_url = Config.API_BASE_URL;
    const port = `${Config.SVR_PORT}`;

    await server.listen({ port: parseInt(port), host: "0.0.0.0" }); // listen on all interfaces, this will make your server accessible from other devices

    console.log(`Server is running on ${base_url}`);
    console.log(`API documentation available at ${base_url}/docs`);
  }
  catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
