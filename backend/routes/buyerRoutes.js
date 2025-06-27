const express = require('express');
<<<<<<< HEAD
const { registerBuyer, signinBuyer  , submitProjectProposal , addJobDescription , getProjectProposals, getJobDescriptions} = require('../controllers/buyerController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// Register route
router.post('/register', registerBuyer);

// Sign-in route
router.post('/signin', signinBuyer);

// Route to handle project proposal submission
router.post('/submit-proposal', protect, submitProjectProposal);

router.post('/add-job-description' , protect , addJobDescription); // Endpoint to add job description


//Projectpropsal list 
router.get('/project-proposals', protect, getProjectProposals);

//Jobpropsal list 
router.get('/job-descriptions', protect, getJobDescriptions);

=======
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

>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
module.exports = router;
