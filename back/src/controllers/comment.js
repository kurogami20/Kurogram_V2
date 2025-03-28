import { where } from "sequelize";
import { Comment } from "../models/index.js";
import { publishSchema, modifiedSchema } from "../schemas/comment.js";
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
  async modify(req, res) {
    const idUser = Number(req.params.idUser);

    const data = req.body;

    const dataVerified = modifiedSchema.parse({
      id: data.id,
      idUser: idUser,
      idPost: data.idPost,
      CommentContent: data.CommentContent,
    });
    console.log(dataVerified);
    const modifiedComment = await Comment.update(dataVerified, {
      where: {
        id: dataVerified.id,
        idUser: dataVerified.idUser,
        idPost: dataVerified.idPost,
      },
    });
    res.status(200).json(modifiedComment);
  },
  async delete(req, res) {},
};

export default commentController;
