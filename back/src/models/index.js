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
});
UserPage.belongsTo(User);

// user et ses commentaires
User.hasMany(Comment, {
  foreignKey: "idUser",
  onDelete: "cascade",
});
Comment.belongsTo(User);

// post et ses commentaire
Post.hasMany(Comment, {
  foreignKey: "idPost",
  onDelete: "cascade",
});
Comment.belongsTo(Post);

// association

Post.belongsToMany(User, {
  through: UserHasPost,
  foreignKey: "idPost",
  otherKey: "idUser",
});
User.belongsToMany(Post, {
  through: UserHasPost,
  foreignKey: "idUser",
  otherKey: "idPost",
});

export { User, UserHasPost, Post, Comment, UserPage, sequelize };
