import React from "react";
import '../styles/CreateSelectComponent.css'
<<<<<<< HEAD
import { useState } from "react";
const CreateSelectComponent = ({ logo, heading, text, buttonText, onSelect, paragraph }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="create-select">
        {/* Logo Section */}
        <img src={logo} alt="Logo" className="create-select__logo" />

        {/* Text Content */}
        <div className="create-select__content">
          <h2 className="create-select__heading">{heading}</h2>
          <div>
            <p className="create-select__text">{text}</p>
            <div className="expandable-container">
              <span className="clickable-text" onClick={toggleParagraph}>
                {isExpanded ? 'CLOSE' : 'LEARN MORE'}
              </span>

              {isExpanded && (
                <p className="paragraph-text">
                  {paragraph}                </p>
              )}</div>
          </div>
        </div>

        {/* Button */}
        <button className="create-select__button" onClick={onSelect}>
          {buttonText}
        </button>


      </div>

=======
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
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
    </div>
  );
};

export default CreateSelectComponent;
