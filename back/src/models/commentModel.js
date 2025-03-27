import { DataTypes, Model } from "sequelize";
import sequelize from "../../data/sequelize.js";

class Comment extends Model {}

Comment.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idUser: { type: DataTypes.INTEGER },
    idPost: { type: DataTypes.INTEGER },
    CommentContent: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    tableName: "comment",

    timestamps: true,

    createdAt: true,

    updatedAt: true,
  }
);

export default Comment;
