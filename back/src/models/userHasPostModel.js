import { DataTypes, Model } from "sequelize";
import sequelize from "../../data/sequelize.js";

class UserHasPost extends Model {}

UserHasPost.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idPost: { type: DataTypes.INTEGER },
    idUser: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    tableName: "userHasPost",

    timestamps: true,

    createdAt: true,

    updatedAt: true,
  }
);

export default UserHasPost;
