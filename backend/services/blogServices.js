const blog = require("../../backend/models/blogModel");

exports.getAllBlogs = async () => {
  return blog.find();
};

exports.createBlog = async (blogData) => {
  try {
    const newData = await blog.create(blogData);
    return { processed: true, noti: "Success" };
  } catch (err) {
    console.error("Error", err);
    return { processed: false, noti: "Failed", reason: err };
  }
};

exports.updateBlog = async (id, updateData) => {
  try {
    const foundBlog = await blog.findById(id);

    if (!foundBlog) {
      throw new Error("Blog not found");
    }
    foundBlog.set(updateData);
    const updatedBlog = await foundBlog.save();
    return updatedBlog;
  } catch (err) {
    console.error(err);
  }
};

exports.deleteBlog = async (id) => {
  try {
    const deletedBlog = await blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return "Document not found.";
    }
    return deletedBlog;
  } catch (err) {
    console.error("Error deleting blog:", err);
    throw error;
  }
};
