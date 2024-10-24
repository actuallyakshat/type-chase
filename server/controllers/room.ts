import type { Context } from "hono";
import prisma from "../db/db";
import type { CreateRoomSchema } from "../db/sharedTypes";

export async function createRoom(c: Context) {
  try {
    const requestBody: CreateRoomSchema = await c.req.json();

    const room = await prisma.room.create({
      data: {},
    });

    const newUser = await prisma.user.create({
      data: {
        name: requestBody.name,
        roomId: room.id,
      },
    });
    return c.json(
      {
        message: "Room Created!",
        user: newUser,
      },
      201
    );
  } catch (error) {
    console.error(error);
    return c.json(
      {
        message: "Something went wrong!",
        user: null,
      },
      500
    );
  }
}
