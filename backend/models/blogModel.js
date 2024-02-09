const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const content = new Schema({
  section: String,
  description: Schema.Types.Mixed,
  visuals: String,
  subContent: Schema.Types.Mixed,
});

const blogSchema = new mongoose.Schema({
  blogTitle: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  content: [content],
  tags: [String],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
