import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use(logger());

app.get("/test", (c) => {
  return new Response("Hello via Hono!");
});

app.get("/*", serveStatic({ root: "./frontend/dist" }));
app.get("/*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type AppType = typeof app;
