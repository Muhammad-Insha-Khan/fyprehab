import React from 'react'
import Headers from '../components/Header';
import Footer from '../components/footer';
import OngoingProjects from '../components/Ongoingprojects';
import ChatMessage from '../components/ChatMessage';
import Stats from '../components/Stats';
import Project from '../components/project'
import SellerDashboardSlider from './SellerDashboardSlider'
import '../styles/BuyerDashboard.css'; 

const SellerMainDashboard = () => {
    return (
        <div className="dashboard-container">
          <div className="header-section">
            <Headers />
          </div>
          <div className="slider-section">
            <SellerDashboardSlider />
          </div>
          <div className="content-container">
            <div className="proposal-column">
                <Project/>
            </div>
            <div className="stats-column">
              <Stats heading="Project Completed" number={2} />
              <Stats heading="Pending Proposals" number={3} />
              <Stats heading="New Messages" number={5} />
            </div>
          </div>
          <div className="chat-section">
            <ChatMessage />
          </div>
          <div className="projects-section">
            <OngoingProjects />
          </div>
          <div className="footer-section">
            <Footer />
          </div>
        </div>
      );
    };

export default SellerMainDashboard
