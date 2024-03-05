const blogService = require("../services/blogServices");

exports.index = async (req, res) => {
  try {
    let data = await blogService.getAllBlogs();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error getting blogs", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.store = async (req, res) => {
  try {
    let data = await blogService.createBlog(req.body);
    if (data.processed) {
      res.status(201).json({ clientRes: data.noti });
    } else {
      res.status(400).json({ clientRes: data.noti, reason: data.reason });
    }
  } catch (err) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    let updateBlog = await blogService.updateBlog(req.params.id, req.body);
    res.status(200).json(updateBlog);
  } catch (err) {
    console.error("Error getting a user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.destroy = async (req, res) => {
  try {
    let deleteBlog = await blogService.deleteBlog(req.params.id);
    res.status(200).json({ request: "Success", data: deleteBlog });
  } catch (err) {
    console.error("Error getting a user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
