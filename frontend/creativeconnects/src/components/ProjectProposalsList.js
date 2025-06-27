import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProjectProposalsList.css';

const ProjectProposalsList = () => {
  const [proposals, setProposals] = useState([]);
  const [visibleProposals, setVisibleProposals] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setVisibleProposals(response.data.projectProposals.slice(0, 1)); // show only first initially
      } catch (err) {
        setError('Failed to load project proposals.');
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  // Handle Show All button click
  const handleShowAll = () => {
    setShowAll(true);
    setVisibleProposals(proposals);
  };

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
    }
  };

  if (loading) return <div className="loading">Loading project proposals...</div>;
  if (error) return <div className="error">{error}</div>;
  if (proposals.length === 0) return <div className="no-proposals">No project proposals found.</div>;

  return (
    <div className="proposals-container">
      <h2>My Project Proposals</h2>

      {/* Show search bar only if showAll is true */}
      {showAll && (
        <input
          type="text"
          placeholder="Search proposals..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      )}

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
    </div>
  );
};

export default ProjectProposalsList;
