const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const buyerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  fieldDomain: { type: String, required: true },
  interests: { type: [String], required: true },
  
  // Project Proposals
  projectProposals: [{
    projectTitle: { type: String, required: true },
    requiredSkills: { type: String, required: true },
    minBudget: { type: Number, required: true },
    maxBudget: { type: Number, required: true },
    timeLimit: { type: Number, required: true },
    expertiseLevel: { type: String, required: true },
    projectDescription: { type: String, required: true },
    dateSubmitted: { type: Date, default: Date.now }
  }],

  // Job Descriptions
  jobDescriptions: [{
    jobTitle: { type: String, required: true },
    workingHours: { type: String, required: true },
    companyName: { type: String, required: true },
    educationalBackground: { type: String, required: true },
    skillsQualifications: { type: String, required: true },
    jobDescription: { type: String, required: true },
    jobType: { type: String, required: true }, // Can be "remote", "hybrid", or "on-site"
    datePosted: { type: Date, default: Date.now }
  }],
}, { timestamps: true });

// Hash password before saving
buyerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Buyer', buyerSchema);
