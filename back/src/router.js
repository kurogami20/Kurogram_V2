import express from "express";
import postController from "./controllers/post.js";
import commentController from "./controllers/comment.js";
import userController from "./controllers/user.js";

const router = express.Router();

function postRoute() {
  router.get("/api/v1/post", postController.getAll);
  router.get("/api/v1/post/:id", postController.getOne);
  router.post("/api/v1/post/:idUser", postController.publish);
  router.delete("/api/v1/post/:idPost", postController.delete);
}
postRoute();

function commentRoute() {
  router.post("/api/v1/comment/:idUser", commentController.publish);
  router.patch("/api/v1/comment/:idUser", commentController.modify);
  router.delete("/api/v1/comment/:idUser", commentController.delete);
}
commentRoute();

function userRoute() {
  router.get("/api/v1/user/", userController.connect);
  router.post("/api/v1/user/", userController.create);
  router.patch("/api/v1/user/:idUser", userController.modify);
  router.delete("/api/v1/user/:idUser", userController.delete);
}
userRoute();

export default router;
