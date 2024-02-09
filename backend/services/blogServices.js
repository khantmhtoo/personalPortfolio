const blog = require("../../backend/models/blogModel");

exports.getAllBlogs = async () => {
  return blog.find();
};

exports.createBlog = async (blogData) => {
  try {
    return await blog.create(blogData);
  } catch (err) {
    console.error(err);
  }
};

exports.updateBlog = async (id, updateData) => {};

exports.deleteBlog = async (id) => {
  try {
    const deletedBlog = await blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      console.log("Document not found.");
    } else {
      console.log("Deleted blog:", deletedBlog);
    }
  } catch (err) {
    console.error("Error deleting blog:", err);
  }
};
