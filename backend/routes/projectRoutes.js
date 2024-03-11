const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

// Get all project
router.get("/", projectController.index);

// Create a new project
router.post("/", projectController.store);

// Update a project
router.patch("/:id", projectController.update);

// Delete a project
router.delete("/:id", projectController.destroy);

module.exports = router;
