import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/JobDescriptionsList.css';

const JobDescriptionsList = () => {
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobDescriptions = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/buyer/job-descriptions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobDescriptions(res.data.jobDescriptions);
        setFilteredJobs(res.data.jobDescriptions);
      } catch (error) {
        console.error('Failed to fetch job descriptions', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDescriptions();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredJobs(jobDescriptions);
      return;
    }

    const filtered = jobDescriptions.filter((job) => {
      const combinedText = (
        job.jobTitle +
        ' ' +
        job.companyName +
        ' ' +
        job.skillsQualifications
      ).toLowerCase();

      return combinedText.includes(searchTerm.toLowerCase());
    });

    setFilteredJobs(filtered);
  };

  const handleShowAll = () => {
    setSearchTerm('');
    setFilteredJobs(jobDescriptions);
  };

  if (loading) {
    return <p className="loading">Loading job descriptions...</p>;
  }

  return (
    <div className="job-list">
      <h2>My Job Descriptions</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search jobs by title, company or skills"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleShowAll}>Show All</button>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="no-results">No job descriptions found.</p>
      ) : (
        <ul className="job-items">
          {filteredJobs.map((job, index) => (
            <li key={index} className="job-item">
              <h3>{job.jobTitle}</h3>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Working Hours:</strong> {job.workingHours}</p>
              <p><strong>Education:</strong> {job.educationalBackground}</p>
              <p><strong>Skills & Qualifications:</strong> {job.skillsQualifications}</p>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Description:</strong> {job.jobDescription}</p>
              <p className="posted-date">
                Posted on: {new Date(job.datePosted).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobDescriptionsList;
