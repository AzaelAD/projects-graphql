const Project = require('../models/projectModel');

module.exports = {
    getAllProjects: async () => {
        return await Project.find();
    },
    createProject: async (name, description, startDate, endDate, budget) => {
        const project = new Project({name, description, startDate, endDate, budget});
        return await project.save();
    },
    updateProject: async (_id, status) => {
        return await Project.findByIdAndUpdate(_id, { status });
    },
    deleteProject: async (_id) => {
        return await Project.findByIdAndDelete(_id);
    }
}