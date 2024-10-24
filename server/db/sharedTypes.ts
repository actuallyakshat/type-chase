import { z } from "zod";

export const createRoomSchema = z.object({
  name: z.string({ message: "Enter a valid name!" }),
});

export type CreateRoomSchema = z.infer<typeof createRoomSchema>;
