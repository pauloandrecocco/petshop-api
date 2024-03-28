// Repositories
import PostRepository from "../repositories/post.repository.js";

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function listPosts() {
  return await PostRepository.listPosts();
}

async function createComentario(postId, comentario) {
  return await PostRepository.createComentario(postId, comentario);
}

export default {
  createPost,
  listPosts,
  createComentario,
};
