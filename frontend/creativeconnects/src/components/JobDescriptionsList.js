<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect, useState, useRef } from 'react';
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
import axios from 'axios';
import '../styles/JobDescriptionsList.css';

const JobDescriptionsList = () => {
  const [jobDescriptions, setJobDescriptions] = useState([]);
<<<<<<< HEAD
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobDescriptions = async () => {
=======
  const [visibleJobs, setVisibleJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const listInnerRef = useRef();

  useEffect(() => {
    const fetchJobs = async () => {
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/buyer/job-descriptions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobDescriptions(res.data.jobDescriptions);
<<<<<<< HEAD
        setFilteredJobs(res.data.jobDescriptions);
=======
        setVisibleJobs(res.data.jobDescriptions.slice(0, 1));
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      } catch (error) {
        console.error('Failed to fetch job descriptions', error);
      } finally {
        setLoading(false);
      }
    };

<<<<<<< HEAD
    fetchJobDescriptions();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredJobs(jobDescriptions);
      return;
    }

=======
    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    const filtered = jobDescriptions.filter((job) => {
      const combinedText = (
        job.jobTitle +
        ' ' +
        job.companyName +
        ' ' +
        job.skillsQualifications
      ).toLowerCase();
<<<<<<< HEAD

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
=======
      return combinedText.includes(term.toLowerCase());
    });
    setVisibleJobs(filtered);
  };

  const handleShowAll = () => {
    setShowAll(true);
    setVisibleJobs(jobDescriptions);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setSearchTerm('');
    setVisibleJobs(jobDescriptions.slice(0, 1));
    listInnerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    if (listInnerRef.current) {
      listInnerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) return <p className="loading">Loading job descriptions...</p>;

  return (
    <div className="job-container">
      <h2>My Job Descriptions</h2>

      {showAll && (
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
        <input
          type="text"
          placeholder="Search jobs by title, company or skills"
          value={searchTerm}
<<<<<<< HEAD
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
=======
          onChange={handleSearch}
          className="search-bar"
        />
      )}

      <div className="scrollable-job-list" ref={listInnerRef}>
        {visibleJobs.length === 0 ? (
          <p className="no-results">No job descriptions found.</p>
        ) : (
          visibleJobs.map((job, index) => (
            <div key={index} className="job-card">
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
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
<<<<<<< HEAD
            </li>
          ))}
        </ul>
      )}
=======
            </div>
          ))
        )}
      </div>

      <div className="button-bar">
        {!showAll && jobDescriptions.length > 1 && (
          <button className="btn" onClick={handleShowAll}>Show More</button>
        )}
        {showAll && (
          <>
            <button className="btn" onClick={handleScrollTop}>Scroll to Top</button>
            <button className="btn" onClick={handleShowLess}>Show Less</button>
          </>
        )}
      </div>
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    </div>
  );
};

export default JobDescriptionsList;
