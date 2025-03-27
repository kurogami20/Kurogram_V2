import { DataTypes, Model } from "sequelize";
import sequelize from "../../data/sequelize.js";

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userName: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    password: { type: DataTypes.TEXT, allowNull: false },
    profilePicture: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    tableName: "user",

    timestamps: true,

    createdAt: true,

    updatedAt: true,
  }
);

export default User;
