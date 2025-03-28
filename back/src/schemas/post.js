import z from "zod";

export const publishSchema = z.object({
  userId: z.number().positive().nonnegative().min(1),
  idPost: z.number(),
  postContent: z.string().min(1),
  likes: z.number(),
});
