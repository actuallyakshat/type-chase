import { createBunWebSocket } from "hono/bun";
import app from "./app.ts";

Bun.serve({
  fetch: app.fetch,
  websocket: {
    open(ws) {
      console.log("Client Connected", ws);
    },
    message(ws, message) {
      console.log("Received Message is:", message);
    },
    close(ws, code, message) {
      console.log("Connection Closed", code, message);
    },
  },
});

console.log("Server Started");
