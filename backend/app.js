// const connectDB = require("./config/mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

// ----------------
// Middlewares
// ----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
