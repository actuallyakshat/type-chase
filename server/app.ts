import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import roomRoutes from "./routes/room";

const app = new Hono().basePath("/api").route("/room", roomRoutes);

app.use(logger());

app.get("/*", serveStatic({ root: "./frontend/dist" }));
app.get("/*", serveStatic({ path: "./frontend/dist/index.html" }));

export default app;
export type AppType = typeof app;
