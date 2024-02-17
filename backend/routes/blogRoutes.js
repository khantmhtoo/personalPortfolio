const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Get all blogs
router.get("/", blogController.index);

// Create a new auth
router.post("/", blogController.store);

// Update a auth
router.put("/:id", blogController.update);

// Delete a auth
router.delete("/:id", blogController.destroy);

module.exports = router;
