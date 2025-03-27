import Comment from "./commentModel.js";
import Post from "./postModel.js";
import User from "./userModel.js";
import UserPage from "./userPageModel.js";
import UserHasPost from "./userHasPostModel.js";
import sequelize from "../../data/sequelize.js";

// user et sa page
User.hasOne(UserPage, {
  foreignKey: "idUser",
  onDelete: "cascade",
  as: "userPage",
});
UserPage.belongsTo(User, {
  as: "user",
});

// user et ses commentaires
User.hasMany(Comment, {
  foreignKey: "idUser",
  onDelete: "cascade",
  as: "comment",
});
Comment.belongsTo(User, {
  foreignKey: "idUser",
  as: "user",
});

// post et ses commentaire
Post.hasMany(Comment, {
  foreignKey: "idPost",
  onDelete: "cascade",
  as: "comment",
});
Comment.belongsTo(Post, {
  foreignKey: "idPost",
  as: "post",
});

// association

Post.belongsToMany(User, {
  through: UserHasPost,
  foreignKey: "idPost",
  otherKey: "idUser",
  as: "user",
});
User.belongsToMany(Post, {
  through: UserHasPost,
  foreignKey: "idUser",
  otherKey: "idPost",
  as: "post",
});

export { User, UserHasPost, Post, Comment, UserPage, sequelize };
