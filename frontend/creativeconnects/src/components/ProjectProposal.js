import React, { useState } from 'react';
import InputField from './InputField';
import '../styles/ProjectProposal.css';
import Button from '../components/Botton';
import axios from 'axios';

const ProjectProposal = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      projectTitle,
      requiredSkills,
      minBudget,
      maxBudget,
      timeLimit,
      expertiseLevel,
      projectDescription
    };

    try {
      const token = localStorage.getItem('token');  // Assuming the JWT token is saved in localStorage

      const response = await axios.post('http://localhost:5000/api/buyer/submit-proposal', projectData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error submitting proposal');
    }
  };

  return (
    <div className="JobDescription">
      <h2>PROJECT INFORMATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="jobinfo">
          <InputField 
            type="text" 
            placeholder="Project Title" 
            value={projectTitle} 
            onChange={(e) => setProjectTitle(e.target.value)} 
          />
          <InputField 
            type="text" 
            placeholder="Required Skills/Technologies" 
            value={requiredSkills} 
            onChange={(e) => setRequiredSkills(e.target.value)} 
          />
        </div>

        <div className="jobinfo">
          <InputField 
            type="number" 
            placeholder="MIN Budget $" 
            value={minBudget} 
            onChange={(e) => setMinBudget(e.target.value)} 
          />
          <InputField 
            type="number" 
            placeholder="MAX Budget $" 
            value={maxBudget} 
            onChange={(e) => setMaxBudget(e.target.value)} 
          />
        </div>

        <div className="jobinfo">
          <InputField 
            type="number" 
            placeholder="Time Limit (Weeks)" 
            value={timeLimit} 
            onChange={(e) => setTimeLimit(e.target.value)} 
          />
          <select className="dropdown" onChange={(e) => setExpertiseLevel(e.target.value)}>
            <option value="entry">Entry-level</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <textarea
          className="projectinput"
          placeholder="Enter Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>

        <div className="projectbutton">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ProjectProposal;
