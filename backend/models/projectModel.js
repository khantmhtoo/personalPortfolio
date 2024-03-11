const mongoose = require("mongoose");

const subContent = new Schema({
  subSectionTitle: String,
  subDescription: String,
});

const content = new Schema({
  section: String,
  description: String,
  visuals: String,
  subContent: subContent,
});

const projectSchema = new mongoose.Schema({
  projectTitle: { type: String, required: true },
  summary: { type: String, required: true },

  // Change to three choice type later
  status: { type: String, required: true },

  position: { type: String, required: true },
  company: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, required: true },
  imgLink: { type: String, required: true },
  content: [content],
  techStack: { type: [String], required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
