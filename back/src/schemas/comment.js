import z from "zod";

export const publishSchema = z.object({
  idUser: z.number().positive().nonnegative().min(1),
  idPost: z.number().positive().nonnegative().min(1),
  CommentContent: z.string().min(1),
});
export const modifiedSchema = z.object({
  id: z.number().positive().nonnegative().min(1),
  idUser: z.number().positive().nonnegative().min(1),
  idPost: z.number().positive().nonnegative().min(1),
  CommentContent: z.string().min(1).optional(),
});
