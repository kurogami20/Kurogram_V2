import express from "express";
import postController from "./controllers/post.js";

const router = express.Router();

function postRoute() {
  router.get("/api/v1/post", postController.getAll);
  router.post("/api/v1/post/:idUser");
  router.delete("/api/v1/post/:idPost");
}
postRoute();

export default router;
