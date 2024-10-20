const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    status: {type: Boolean, default: false},
    budget: {type: Number, required: true},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;