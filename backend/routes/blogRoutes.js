const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Get all blogs
router.get("/", blogController.index);

// Create a new blog
router.post("/", blogController.store);

// Update a blog
router.patch("/:id", blogController.update);

// Delete a blog
router.delete("/:id", blogController.destroy);

module.exports = router;
