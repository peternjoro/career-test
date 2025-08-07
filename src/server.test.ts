// one test here

import { test } from "node:test";
import assert from "assert";
import { buildServer } from "./server";

test("GET / returns welcome message", async () => {
  const server = await buildServer();

  const response = await server.inject({
    method: "GET",
    url: "/",
  });

  assert.strictEqual(response.statusCode, 200);
  assert.strictEqual(response.payload, "Welcome to Fastify Template API!");
});

test("POST /example returns correct response", async () => {
  const server = await buildServer();

  const payload = {
    name: "John Doe",
    age: 30,
  };

  const response = await server.inject({
    method: "POST",
    url: "/example",
    payload,
  });

  assert.strictEqual(response.statusCode, 200);
  const body = JSON.parse(response.payload);
  assert.strictEqual(body.message, "Success");
  assert.strictEqual(body.data.name, payload.name);
  assert.strictEqual(body.data.age, payload.age);
  assert.ok(body.data.timestamp);
});
