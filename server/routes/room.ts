import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createRoomSchema } from "../db/sharedTypes";
import { createRoom } from "../controllers/room";

const roomRoutes = new Hono().post(
  "/",
  zValidator("json", createRoomSchema),
  createRoom
);

export default roomRoutes;
