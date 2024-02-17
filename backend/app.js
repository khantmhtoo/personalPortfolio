// const connectDB = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");

// ----------------
// Middlewares
// ----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// ----------------
// Routes
// ----------------
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");
// const projectRoutes = require("./routes/projectRoutes");

app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoutes);
// app.use("/api/project", projectRoutes);

// This is using the static HTML from the public folder probably can redesign it a bit later
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
