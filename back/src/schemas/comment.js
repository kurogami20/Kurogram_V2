import z from "zod";

export const publishSchema = z.object({
  idUser: z.number().positive().nonnegative().min(1),
  idPost: z.number().positive().nonnegative().min(1),
  CommentContent: z.string().min(1),
});
