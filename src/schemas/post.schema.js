import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    titulo: String,
    conteudo: String,
    comentarios: Array,
  },
  { collection: "posts", versionKey: false }
);

export default PostSchema;
