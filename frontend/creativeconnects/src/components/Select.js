import React from "react";
import '../styles/CreateSelectComponent.css'
const CreateSelectComponent = ({ logo, heading, text, buttonText, onSelect }) => {
  return (
    <div className="create-select">
      {/* Logo Section */}
      <img src={logo} alt="Logo" className="create-select__logo" />
      
      {/* Text Content */}
      <div className="create-select__content">
        <h2 className="create-select__heading">{heading}</h2>
        <p className="create-select__text">{text}</p>
      </div>
      
      {/* Button */}
      <button className="create-select__button" onClick={onSelect}>
        {buttonText}
      </button>
    </div>
  );
};

export default CreateSelectComponent;
