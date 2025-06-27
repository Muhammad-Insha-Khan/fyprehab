import React, { useEffect, useState } from 'react';
import Signin from '../components/Sign';
import '../styles/WelcomePage.css';

const WelcomePage = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeText(false); // Hide the welcome text after 5 seconds
<<<<<<< HEAD
    }, 3000);

    const signinTimer = setTimeout(() => {
      setShowSignin(true); // Show signin form after 5 seconds
    }, 3000);
=======
    }, 5000);

    const signinTimer = setTimeout(() => {
      setShowSignin(true); // Show signin form after 5 seconds
    }, 5000);
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(signinTimer);
    };
  }, []);

  return (
    <div className='welcome'>
      {showWelcomeText && !showSignin ? (
        <div className="welcome-section">
          <h1>Welcome to <span>Creative Connect</span></h1>
          <p>Your go-to platform for freelancing opportunities and creative collaborations.</p>
        </div>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default WelcomePage;
