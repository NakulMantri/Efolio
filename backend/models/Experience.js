const mongoose = require('mongoose');

// Define the schema for the experience document
const experienceSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  employmentType: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  locationType: { type: String, required: true },
  stillWorking: { type: Boolean, default: false },
  durationYears: { type: Number }, // Assuming this field is optional based on the checkbox
  durationMonths: { type: Number }, // Assuming this field is optional based on the checkbox
  description: { type: String, required: true }
});

// Create a model for the experience schema
const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
