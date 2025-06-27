const express = require('express');
const {
  registerBuyer,
  signinBuyer,
  submitProjectProposal,
  addJobDescription,
  getProjectProposals,
  getJobDescriptions,
  deleteBuyerAccount // ✅ Import delete controller
} = require('../controllers/buyerController');

const protect = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Register route
router.post('/register', registerBuyer);

// ✅ Sign-in route
router.post('/signin', signinBuyer);

// ✅ Submit project proposal
router.post('/submit-proposal', protect, submitProjectProposal);

// ✅ Add job description
router.post('/add-job-description', protect, addJobDescription);

// ✅ Get all project proposals of logged-in buyer
router.get('/project-proposals', protect, getProjectProposals);

// ✅ Get all job descriptions of logged-in buyer
router.get('/job-descriptions', protect, getJobDescriptions);

// ✅ Delete buyer account with first name confirmation
router.delete('/delete', protect, deleteBuyerAccount); // 🔥 New route

module.exports = router;
