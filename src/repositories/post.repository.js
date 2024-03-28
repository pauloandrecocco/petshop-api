import { ObjectId } from "mongodb";

// Database
import { getMongodbClient } from "../../config/db.js";

// Utils
import { errorHandler } from "../utils/error-handler.js";

async function getPostById(objectId) {
  const client = getMongodbClient();
  try {
    await client.connect();

    return await client
      .db("petshop")
      .collection("posts")
      .findOne({ _id: objectId });
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  } finally {
    client.close();
  }
}

async function createPost(post) {
  const client = getMongodbClient();
  try {
    await client.connect();

    const postId = (
      await client.db("petshop").collection("posts").insertOne(post)
    ).insertedId;

    return await getPostById(postId);
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  } finally {
    client.close();
  }
}

async function listPosts() {
  const client = getMongodbClient();
  try {
    await client.connect();

    return await client.db("petshop").collection("posts").find({}).toArray();
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  } finally {
    client.close();
  }
}

async function createComentario(postId, comentario) {
  const client = getMongodbClient();
  try {
    await client.connect();

    const objectId = new ObjectId(postId);
    const post = await getPostById(objectId);

    if (!post.comentarios) post.comentarios = [];
    post.comentarios.push(comentario);

    await client
      .db("petshop")
      .collection("posts")
      .updateOne({ _id: objectId }, { $set: { ...post } });

    return post;
  } catch (err) {
    throw err;
    // const error = errorHandler(500, err.message);
    //throw error;
  } finally {
    client.close();
  }
}

export default {
  createPost,
  listPosts,
  createComentario,
};
