import { DataTypes, Model } from "sequelize";
import sequelize from "../../data/sequelize.js";

class Post extends Model {}

Post.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postContent: { type: DataTypes.TEXT },
    likeNumber: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    tableName: "post",

    timestamps: true,

    createdAt: true,

    updatedAt: true,
  }
);

export default Post;
