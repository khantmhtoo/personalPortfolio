const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Create a new auth
router.post("/", contactController.sendContact);

module.exports = router;
