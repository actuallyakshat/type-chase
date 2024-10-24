// import { Hono } from "hono";
// import { zValidator } from "@hono/zod-validator";
// import { createRoomSchema } from "../db/sharedTypes";
// import { createRoom } from "../controllers/room";
// import { createBunWebSocket } from "hono/bun";

// const { upgradeWebSocket } = createBunWebSocket();

// const roomRoutes = new Hono()
//   .post("/", zValidator("json", createRoomSchema), createRoom)
//   .get(
//     "/test",
//     upgradeWebSocket((c) => {
//       return {
//         onOpen(event, ws) {
//           console.log("client connected", event, ws);
//           ws.send("Hello from server");
//         },
//       };
//     }),
//   );

// export default roomRoutes;
// export type RoomTypes = typeof roomRoutes;

import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createRoomSchema } from "../db/sharedTypes";
import { createRoom } from "../controllers/room";
import { createBunWebSocket } from "hono/bun";

const { upgradeWebSocket } = createBunWebSocket();

const roomRoutes = new Hono()
  .post("/", zValidator("json", createRoomSchema), createRoom)
  .get(
    "/ws",
    upgradeWebSocket((c) => {
      return {
        onOpen(event, ws) {
          console.log("Client Connected"), ws.send("Hello from the server");
        },
        onMessage(event, ws) {
          console.log("Received Message", event.data);
          console.log(`Server received: ${event.data}`);
        },
        onClose(event, ws) {
          console.log("Client disconnected");
        },
      };
    }),
  );

export default roomRoutes;
export type RoomTypes = typeof roomRoutes;
