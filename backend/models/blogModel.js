const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const content = new Schema({
  sectionTitle: String,
  description: String,
  visuals: String,
  subContent: Schema.Types.Mixed,
});

const blogSchema = new mongoose.Schema({
  blogTitle: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  content: [content],
  tags: { type: [String], required: true },
});

const Blog = mongoose.model("blogs", blogSchema);

module.exports = Blog;
