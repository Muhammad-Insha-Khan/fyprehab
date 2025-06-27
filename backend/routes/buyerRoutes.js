const express = require('express');
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

module.exports = router;
