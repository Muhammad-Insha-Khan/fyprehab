import React, { useState } from 'react'
import ProjectProposal from '../components/ProjectProposal'
import JobDescription from '../components/JobDescription' // Ensure correct import
import '../styles/Proposal.css'

const Proposal = () => {
  const [proposal, setProposal] = useState("ProjectProposal");

  const toggleJob = () => setProposal("JobDescription");
  const toggleProposal = () => setProposal("ProjectProposal");

  console.log(proposal);

  return (
    <div className='Proposal'>
<<<<<<< HEAD
      <div class="container">
        <div class="column">
          <h2 onClick={toggleProposal}>
            ProjectProposal
          </h2>
        </div>
        <div class="divider"></div>
        <div class="column">

          <h2 onClick={toggleJob}>
            JobProposals
          </h2>
        </div>
      </div>


=======
        <div class="container">
        <div class="column">
            <h2 onClick={toggleProposal} class="ProjectProposalHeading">
                    ProjectProposal 
                </h2>
        </div>
        <div class="divider"></div>
        <div class="column">
            
            <h2 onClick={toggleJob} class="JobProposalHeading">
                    JobProposal
                </h2>
        </div>
        </div>
           
  
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
      <div className='Divider'></div>
      {proposal === "ProjectProposal" && <ProjectProposal />}
      {proposal === "JobDescription" && <JobDescription />}
    </div>
  );
}

export default Proposal;
