const project = require("../../backend/models/projectModel");

exports.getAllProjects = async () => {
  return project.find();
};

exports.createBlog = async (projectData) => {
  try {
    const newData = await project.create(projectData);
    return { processed: true, noti: "Success", data: newData };
  } catch (err) {
    console.error("Error", err);
    return { processed: false, noti: "Failed", reason: err };
  }
};

exports.updateBlog = async (id, updateData) => {
  try {
    const foundProject = await project.findById(id);

    if (!foundProject) {
      throw new Error("Project not found");
    }
    foundProject.set(updateData);
    const updatedProject = await foundProject.save();
    return updatedProject;
  } catch (err) {
    console.error(err);
  }
};

exports.deleteBlog = async (id) => {
  try {
    const deletedProject = await project.findByIdAndDelete(id);
    if (!deletedProject) {
      return "Document not found.";
    }
    return deletedProject;
  } catch (err) {
    console.error("Error deleting project:", err);
    throw error;
  }
};
