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

  return (
    <>
      <div className="registration-flow">
        <div
          className={`select-options-container ${
            selectedOption ? "fade-out" : "fade-in"
          }`}
        >
          {!selectedOption && (
            <>
              <h1>SELECT TO REGISTER</h1>
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Skill Swapper"
                text="Register as a skill swapper to exchange your expertise and collaborate with others for mutual benefits. Build connections and grow your skills!"
                buttonText="Select"
                onSelect={() => handleSelect("Swapper")}
              />
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Seller"
                text="Join as a seller to showcase your products or services and reach a wide audience. Start selling and grow your business today."
                buttonText="Select"
                onSelect={() => handleSelect("Seller")}
              />
              <CreateSelectComponent
                logo="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                heading="Register as Buyer"
                text="Sign up as a buyer to explore a variety of products or services and shop conveniently from trusted sellers."
                buttonText="Select"
                onSelect={() => handleSelect("Buyer")}
              />
            </>
          )}
        </div>
        <div
          className={`registration-form-container ${
            selectedOption ? "fade-in" : "fade-out"
          }`}
        >
          {renderSelectedComponent()}
        </div>
      </div>
    </>
  );
};

export default Registration;
