import React, { useState } from 'react';
import axios from 'axios';
import '../styles/JobDescription.css';
import InputField from './InputField';
import Button from '../components/Botton';

const JobDescription = () => {
  // State for job description fields
  const [jobTitle, setJobTitle] = useState('');
  const [workingHours, setWorkingHours] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [educationalBackground, setEducationalBackground] = useState('');
  const [skillsQualifications, setSkillsQualifications] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');

  // Handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare job data to be sent in the request
    const jobData = {
      jobTitle,
      workingHours,
      companyName,
      educationalBackground,
      skillsQualifications,
      jobDescription,
      jobType
    };

    try {
      const token = localStorage.getItem('token');  // Get JWT token from localStorage

      // Send job description data to backend
      const response = await axios.post('http://localhost:5000/api/buyer/add-job-description', jobData, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include the token in the Authorization header
          'Content-Type': 'application/json'  // Set content type
        }
      });

      // Display response message
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting job description:', error);
      alert('Error submitting job description');
    }
  };

  return (
    <div>
      <h2>Submit Job Description</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Working Hours:</label>
          <input
            type="text"
            value={workingHours}
            onChange={(e) => setWorkingHours(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Educational Background:</label>
          <input
            type="text"
            value={educationalBackground}
            onChange={(e) => setEducationalBackground(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Skills & Qualifications:</label>
          <input
            type="text"
            value={skillsQualifications}
            onChange={(e) => setSkillsQualifications(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Job Description:</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Job Type:</label>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)} required>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="on-site">On-Site</option>
          </select>
        </div>

        <button type="submit">Submit Job Description</button>
      </form>
    </div>
  );
};

export default JobDescription;