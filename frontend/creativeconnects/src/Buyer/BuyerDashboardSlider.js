import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Slider.css";

<<<<<<< HEAD

=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
export default function BuyerDashboardSlider() {
  const [user, setUser] = useState(null);
  const { slug } = useParams();
  const [isParagraph, setIsParagraph] = useState(true);

<<<<<<< HEAD

  useEffect(() => {
    // Retrieve user data from localStorage
=======
  useEffect(() => {
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    } else {
<<<<<<< HEAD
      // Redirect to login if no user is found
      window.location.href = '/';
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsParagraph((prev) => !prev);
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(interval);
  }, []);


=======
      window.location.href = '/';
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsParagraph((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="welcome-container">
<<<<<<< HEAD
      <h1 className="welcome-heading">
      <h2>Welcome to your Dashboard, {user.firstName } !</h2>      </h1>
      <div className="content-container">
        {/* Text visibility controlled by isParagraph */}
        <div
          className={`content text-slide ${isParagraph ? "visible" : "hidden"}`}
        >
          <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Field Domain: {user.fieldDomain}</p>
    <p>Interests: {user.interests}</p>
    <p>Your unique slug: {slug}</p>
        </div>
        {/* List visibility controlled by isParagraph */}
        <div
          className={`content list-slide ${!isParagraph ? "visible" : "hidden"}`}
        >
          <p>This is another paragraph that will alternate in and out.</p>
        </div>
      </div>
    </div>
   
   
    {/* Add more user info as needed */}
  </div>
  )
=======
        <h1 className="welcome-heading">
          <h2>Welcome to your Dashboard, {user.firstName}!</h2>
        </h1>
        <div className="content-container">
          <div
            className={`content text-slide ${isParagraph ? "visible" : "hidden"}`}
          >
            <p >Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Field Domain: {user.fieldDomain}</p>
            <p>Interests: {user.interests}</p>
            <p>Your unique slug: {slug}</p>
          </div>

          <div
            className={`content list-slide ${!isParagraph ? "visible" : "hidden"}`}
          >
            <p id="creative-connects-message">
         
  Hey {user.firstName}, welcome again! Creative Connects is your personal hub to meet fellow creatives and passionate professionals. <br />
  Here, you can showcase your talents, collaborate on real-world projects, and build meaningful connections. <br />
  Whether you're a designer, developer, writer, or strategist, there's always a place for your skills to shine. <br />
  Start exploring opportunities, exchange ideas, and grow together with a supportive creative community.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
}
