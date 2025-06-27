import React, { useState } from "react";
import CreateSelectComponent from "../components/Select";
import SwapperRegistration from "../Swapper/SwapperRegistration"; // Import SwapperRegistration
import BuyerRegistration from "../Buyer/BuyerRegistration";
import SellerRegistration from "../Seller/SellerRegistration";
import "../styles/Registration.css";

const Registration = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    console.log("Selected Option:", option);  // Debugging: log selected option
    setSelectedOption(option);
  };

  // Function to render the selected component based on the option
  const renderSelectedComponent = () => {
    console.log("Rendering component for:", selectedOption);  // Debugging: log selected option before rendering
    switch (selectedOption) {
      case "Swapper":
        return <SwapperRegistration />;
      case "Seller":
        return <SellerRegistration />;
      case "Buyer":
        return <BuyerRegistration />;
      default:
        return null;
    }
  };

<<<<<<< HEAD

=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
  return (
    <>
      <div className="registration-flow">
        <div
<<<<<<< HEAD
          className={`select-options-container ${selectedOption ? "fade-out" : "fade-in"
            }`}
        >
          {!selectedOption && (
            <>
              <h1 class="gradient-text">SELECT YOUR DOMAIN</h1>
=======
          className={`select-options-container ${
            selectedOption ? "fade-out" : "fade-in"
          }`}
        >
          {!selectedOption && (
            <>
              <h1>SELECT TO REGISTER</h1>
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Skill Swapper"
                text="Register as a skill swapper to exchange your expertise and collaborate with others for mutual benefits. Build connections and grow your skills!"
<<<<<<< HEAD
                paragraph="Our platform enables swappers to trade skills directly with others, creating valuable partnerships without monetary exchange. Swappers can easily showcase their expertise, find collaborators, and grow their abilities through mutual support and project-based exchanges. It’s a flexible, community-driven way to learn and contribute."
                buttonText="Select"
                onSelect={() => handleSelect("Swapper")
                }
=======
                buttonText="Select"
                onSelect={() => handleSelect("Swapper")}
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
              />
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Seller"
                text="Join as a seller to showcase your products or services and reach a wide audience. Start selling and grow your business today."
<<<<<<< HEAD
                paragraph="For sellers, the platform provides a powerful space to showcase products or services to a wide audience. Sellers can list offerings clearly, manage orders effortlessly, and receive secure payments, all while building trust through transparent reviews. It’s designed to help sellers grow their business smoothly and confidently."
=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
                buttonText="Select"
                onSelect={() => handleSelect("Seller")}
              />
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Buyer"
                text="Sign up as a buyer to explore a variety of products or services and shop conveniently from trusted sellers."
<<<<<<< HEAD
                paragraph="Our platform empowers buyers to effortlessly connect with top freelancers, manage projects seamlessly, and make secure payments with confidence. With clear communication tools and trusted reviews, buyers get quality results every time."

=======
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
                buttonText="Select"
                onSelect={() => handleSelect("Buyer")}
              />
            </>
          )}
        </div>
        <div
<<<<<<< HEAD
          className={`registration-form-container ${selectedOption ? "fade-in" : "fade-out"
            }`}
=======
          className={`registration-form-container ${
            selectedOption ? "fade-in" : "fade-out"
          }`}
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
        >
          {renderSelectedComponent()}
        </div>
      </div>
    </>
  );
};

export default Registration;
