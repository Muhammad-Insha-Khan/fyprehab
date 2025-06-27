const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Buyer = require('../models/Buyer');

const registerBuyer = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, fieldDomain, interests } = req.body;

    // Check for existing user
    const existingBuyer = await Buyer.findOne({ email });
    if (existingBuyer) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Create new buyer
    const newBuyer = await Buyer.create({ firstName, lastName, email, phone, password, fieldDomain, interests });

    // Generate token
    const token = jwt.sign({ id: newBuyer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
      message: 'Registration successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const signinBuyer = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if buyer exists
    const buyer = await Buyer.findOne({ email });
    if (!buyer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, buyer.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: buyer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const slug = `${buyer.firstName}-${buyer.lastName}-${buyer._id}${randomDigits}`;

    res.status(200).json({
      message: 'Sign-in successful',
      token,
      user: {
        id: buyer._id,
        firstName: buyer.firstName,
        lastName: buyer.lastName,
        email: buyer.email,
        phone: buyer.phone,
        fieldDomain: buyer.fieldDomain,
        interests: buyer.interests,
        slug,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


//fuctyion
const submitProjectProposal = async (req, res) => {
  const { projectTitle, requiredSkills, minBudget, maxBudget, timeLimit, expertiseLevel, projectDescription } = req.body;

  try {
    // Find the buyer by ID (assuming the buyer is logged in and the token contains the buyer ID)
    const buyer = await Buyer.findById(req.user.id);
    if (!buyer) {
      return res.status(400).json({ message: 'Buyer not found' });
    }

    // Add the new proposal to the projectProposals array
    buyer.projectProposals.push({
      projectTitle,
      requiredSkills,
      minBudget,
      maxBudget,
      timeLimit,
      expertiseLevel,
      projectDescription
    });

    // Save the updated buyer
    await buyer.save();

    res.status(200).json({ message: 'Project proposal submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//new on efunc
const addJobDescription = async (req, res) => {
  try {
    // Extract job description data from the request body
    const { jobTitle, workingHours, companyName, educationalBackground, skillsQualifications, jobDescription, jobType } = req.body;

    // Validate the data
    if (!jobTitle || !workingHours || !companyName || !educationalBackground || !skillsQualifications || !jobDescription || !jobType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find the buyer (authenticated user)
    const buyer = await Buyer.findById(req.user.id);
    if (!buyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    // Add the job description to the buyer's jobDescriptions array
    buyer.jobDescriptions.push({
      jobTitle,
      workingHours,
      companyName,
      educationalBackground,
      skillsQualifications,
      jobDescription,
      jobType,
    });

    // Save the buyer document
    await buyer.save();

    // Respond with success message
    res.status(200).json({ message: 'Job description submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProjectProposals = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.user.id);
    if (!buyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }
    res.status(200).json({ projectProposals: buyer.projectProposals });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all job descriptions of logged-in buyer
const getJobDescriptions = async (req, res) => {
  try {
    const buyer = await Buyer.findById(req.user.id);
    if (!buyer) {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    res.status(200).json({ jobDescriptions: buyer.jobDescriptions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { registerBuyer, signinBuyer, submitProjectProposal , addJobDescription , getProjectProposals , getJobDescriptions};
