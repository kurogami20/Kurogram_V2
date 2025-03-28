import { Post, UserHasPost } from "../models/index.js";
import { publishSchema } from "../schemas/post.js";
const postController = {
  async getAll(req, res) {
    const allPosts = await Post.findAll({
      include: [
        {
          association: "comment",
          attributes: ["id", "CommentContent"],
          include: [
            {
              association: "user",
              attributes: ["userName", "profilePicture"],
            },
          ],
        },
        {
          association: "user",
          attributes: ["userName", "profilePicture"],
        },
      ],
      order: [["id", "DESC"]],
    });
    res.status(200).json(allPosts);
  },
  async getOne(req, res) {
    const id = Number(req.params.id);

    const onePost = await Post.findByPk(id, {
      include: [
        {
          association: "comment",
          attributes: ["id", "CommentContent"],
          include: [
            {
              association: "user",
              attributes: ["userName", "profilePicture"],
            },
          ],
        },
        {
          association: "user",
          attributes: ["userName", "profilePicture"],
        },
      ],
      order: [["id", "DESC"]],
    });
    res.status(200).json(onePost);
  },
  async publish(req, res) {
    const idUser = Number(req.params.idUser);
    const idPost = Number(await Post.max("id")) + 1;
    const { postContent } = req.body;
    const postObject = {
      userId: idUser,
      idPost: idPost,
      postContent: postContent,
      likes: 0,
    };

    const verifiedData = publishSchema.parse(postObject);

    const newPost = await Post.create({
      id: verifiedData.idPost,
      postContent: verifiedData.postContent,
      likes: verifiedData.likes,
    });
    await UserHasPost.create({
      idPost: verifiedData.idPost,
      idUser: verifiedData.userId,
    });
    res.status(200).json(newPost);
  },
  async delete(req, res) {
    const idPost = Number(req.params.idPost);
    await UserHasPost.destroy({
      where: { idPost: idPost },
    });
    const deletedpost = await Post.destroy({
      where: {
        id: idPost,
      },
    });
    res.status(200).json(deletedpost);
  },
};

export default postController;
