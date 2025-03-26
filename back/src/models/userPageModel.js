import { DataTypes, Model } from "sequelize";
import sequelize from "../../data/sequelize.js";

class UserPage extends Model {}

UserPage.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postNumber: { type: DataTypes.INTEGER },
    following: { type: DataTypes.INTEGER },
    follower: { type: DataTypes.INTEGER },
    posts: { type: DataTypes.TEXT },
    bio: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    tableName: "userPage",

    timestamps: true,

    createdAt: true,

    updatedAt: true,
  }
);

export default UserPage;
