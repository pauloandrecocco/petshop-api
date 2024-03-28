// Services
import PostService from "../services/post.service.js";

// Utils
import {
  validateId,
  // validatePost,
  // validateComentario,
} from "../utils/validators.js";

async function createPost(req, res, next) {
  const post = req.body;

  try {
    // validatePost(post);

    res.send(await PostService.createPost(post));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function listPosts(req, res, next) {
  try {
    res.send(await PostService.listPosts());
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  const { postId } = req.params;
  const comentario = req.body;

  try {
    // validateComentario(comentario);

    res.send(await PostService.createComentario(postId, comentario));
    logger.info(`${req.method} ${req.baseUrl} - Success`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  listPosts,
  createComentario,
};
