import express from "express";

// Controllers
import PostController from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", PostController.createPost);
router.get("/", PostController.listPosts);
router.post("/:postId/comentarios", PostController.createComentario);

// Error handling
router.use((err, req, res, next) => {
  res.status(err.code ?? 500).send({ error: err.message });
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
});

export default router;
