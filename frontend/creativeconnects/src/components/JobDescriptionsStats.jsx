import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDescriptionsStats = () => {
  const [jobCount, setJobCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobCount = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/buyer/job-descriptions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data && res.data.jobDescriptions) {
          setJobCount(res.data.jobDescriptions.length);
        } else {
          setError('Invalid response format');
        }
      } catch (err) {
        setError('Failed to load job descriptions');
      } finally {
        setLoading(false);
      }
    };

    fetchJobCount();
  }, []);

  if (loading) return <p>Loading job stats...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={styles.stat}>
      <div
        style={styles.statCard}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
          e.currentTarget.style.background = 'linear-gradient(145deg, #004d40, #00796b)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.background = 'linear-gradient(145deg, #00796b, #004d40)';
        }}
      >
        <div style={styles.statIcon}></div>
        <div style={styles.statContent}>
          <div style={styles.statHeading}>Total Job Descriptions</div>
          <div style={styles.statNumber}>{jobCount}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  stat: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  statCard: {
    margin: '15px',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(145deg, #00796b, #004d40)',
    color: 'white',
    borderRadius: '15px',
    border: 'none',
    gap: '20px',
    maxWidth: '350px',
    width: '350px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    overflow: 'hidden',
    cursor: 'default',
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statIcon: {
    fontSize: '3em',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '15px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    flexShrink: 0,
  },
  statHeading: {
    fontSize: '1.3em',
    fontWeight: 500,
    margin: '5px 0',
    letterSpacing: '1px',
  },
  statNumber: {
    fontSize: '2em',
    fontWeight: 700,
    marginTop: '5px',
    color: '#ffeb3b',
    letterSpacing: '2px',
  },
};

export default JobDescriptionsStats;
