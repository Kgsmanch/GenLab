import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    titulo: String,
    subtitulo: String
})

const Blog = model("Blog", blogSchema);

export default Blog;