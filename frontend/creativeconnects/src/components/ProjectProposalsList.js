<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useEffect, useState, useRef } from 'react';
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
import axios from 'axios';
import '../styles/ProjectProposalsList.css';

const ProjectProposalsList = () => {
  const [proposals, setProposals] = useState([]);
  const [visibleProposals, setVisibleProposals] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
=======
  const listInnerRef = useRef();

>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/buyer/project-proposals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProposals(response.data.projectProposals);
<<<<<<< HEAD
        setVisibleProposals(response.data.projectProposals.slice(0, 1)); // show only first initially
=======
        setVisibleProposals(response.data.projectProposals.slice(0, 1));
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      } catch (err) {
        setError('Failed to load project proposals.');
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

<<<<<<< HEAD
  // Handle Show All button click
=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
  const handleShowAll = () => {
    setShowAll(true);
    setVisibleProposals(proposals);
  };

<<<<<<< HEAD
  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setVisibleProposals(proposals);
    } else {
      const filtered = proposals.filter((p) =>
        p.projectTitle.toLowerCase().includes(term.toLowerCase())
      );
      setVisibleProposals(filtered);
=======
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = proposals.filter((p) =>
      p.projectTitle.toLowerCase().includes(term.toLowerCase())
    );
    setVisibleProposals(filtered);
  };

  const handleScrollTop = () => {
    if (listInnerRef.current) {
      listInnerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    }
  };

  if (loading) return <div className="loading">Loading project proposals...</div>;
  if (error) return <div className="error">{error}</div>;
  if (proposals.length === 0) return <div className="no-proposals">No project proposals found.</div>;

  return (
    <div className="proposals-container">
      <h2>My Project Proposals</h2>

<<<<<<< HEAD
      {/* Show search bar only if showAll is true */}
=======
      {/* Search bar shown only when "Show All" is active */}
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      {showAll && (
        <input
          type="text"
          placeholder="Search proposals..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      )}

<<<<<<< HEAD
      {visibleProposals.map((proposal, idx) => (
        <div key={idx} className="proposal-card">
          <h3>{proposal.projectTitle}</h3>
          <p><strong>Required Skills:</strong> {proposal.requiredSkills}</p>
          <p><strong>Budget:</strong> ${proposal.minBudget} - ${proposal.maxBudget}</p>
          <p><strong>Time Limit:</strong> {proposal.timeLimit} weeks</p>
          <p><strong>Expertise Level:</strong> {proposal.expertiseLevel}</p>
          <p><strong>Description:</strong> {proposal.projectDescription}</p>
          <p className="date-submitted">
            Submitted on: {new Date(proposal.dateSubmitted).toLocaleDateString()}
          </p>
        </div>
      ))}

      {/* Show "Show All" button only if not showing all */}
      {!showAll && proposals.length > 1 && (
        <button className="show-all-btn" onClick={handleShowAll}>
          Show All
        </button>
      )}
=======
      <div className="scrollable-list" ref={listInnerRef}>
        {visibleProposals.map((proposal, idx) => (
          <div key={idx} className="proposal-card">
            <h3>{proposal.projectTitle}</h3>
            <p><strong>Required Skills:</strong> {proposal.requiredSkills}</p>
            <p><strong>Budget:</strong> ${proposal.minBudget} - ${proposal.maxBudget}</p>
            <p><strong>Time Limit:</strong> {proposal.timeLimit} weeks</p>
            <p><strong>Expertise Level:</strong> {proposal.expertiseLevel}</p>
            <p><strong>Description:</strong> {proposal.projectDescription}</p>
            <p className="date-submitted">
              Submitted on: {new Date(proposal.dateSubmitted).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <div className="button-bar">
  {!showAll && proposals.length > 1 && (
    <button className="show-all-btn" onClick={handleShowAll}>
      Show More
    </button>
  )}
  {showAll && (
    <>
      <button className="scroll-top-btn" onClick={handleScrollTop}>
        Scroll to Top
      </button>
      <button
        className="show-all-btn"
        onClick={() => {
          setShowAll(false);
          setSearchTerm('');
          setVisibleProposals(proposals.slice(0, 1));
        }}
      >
        Show Less
      </button>
    </>
  )}
</div>
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    </div>
  );
};

export default ProjectProposalsList;
