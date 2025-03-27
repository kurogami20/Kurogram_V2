import { Post } from "../models/index.js";

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
    res.json(allPosts);
  },
};

export default postController;
