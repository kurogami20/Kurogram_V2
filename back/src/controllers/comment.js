import { Comment } from "../models/index.js";
import { publishSchema } from "../schemas/comment.js";
const commentController = {
  async publish(req, res) {
    const idUser = Number(req.params.idUser);
    const data = req.body;
    const dataVerified = publishSchema.parse({
      idUser: idUser,
      idPost: data.idPost,
      CommentContent: data.CommentContent,
    });
    const newComment = await Comment.create(dataVerified);
    res.status(200).json(newComment);
  },
  modify(req, res) {},
  delete(req, res) {},
};

export default commentController;
