// Database
import { connectMongodb } from "../../config/db.js";

// Schemas
import PostSchema from "../schemas/post.schema.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function getPostById(id) {
  try {
    const mongoose = await connectMongodb();

    const Post = mongoose.model("Post", PostSchema);
    return await Post.findById(id);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function updatePost(post) {
  try {
    const mongoose = await connectMongodb();

    const Post = mongoose.model("Post", PostSchema);
    await Post.findByIdAndUpdate(post._id, post);

    return await getPostById(post._id);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function createPost(post) {
  try {
    const mongoose = await connectMongodb();

    const Post = mongoose.model("Post", PostSchema);
    post = new Post(post);
    await post.save();

    return await getPostById(post._id);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function listPosts() {
  try {
    const mongoose = await connectMongodb();

    const Post = mongoose.model("Post", PostSchema);

    return await Post.find({});
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

async function createComentario(postId, comentario) {
  try {
    const post = await getPostById(postId);
    post.comentarios.push(comentario);

    return await updatePost(post);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  }
}

export default {
  createPost,
  listPosts,
  createComentario,
};
