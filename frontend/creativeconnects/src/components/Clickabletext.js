<<<<<<< HEAD
import React from 'react'
import '../styles/Clickabletext.css'
const Clickabletext = ({icon:Icon , text , href}) => {

  
  return (
    <div>
        <a href={href} className='Clickabletext'>{Icon && <Icon className="Icon" />}{text}</a>
    </div>
  )
}

export default Clickabletext
=======
// components/Clickabletext.js
import React from 'react';
import '../styles/Clickabletext.css';

const Clickabletext = ({ icon: Icon, text, href, onClick }) => {
  if (onClick) {
    return (
      <div className="Clickabletext clickable" onClick={onClick}>
        {Icon && <Icon className="Icon" />} {text}
      </div>
    );
  }

  return (
    <a href={href} className="Clickabletext">
      {Icon && <Icon className="Icon" />} {text}
    </a>
  );
};

export default Clickabletext;
>>>>>>> 00808c20f753da777068b81dc215fec35f82ed59
