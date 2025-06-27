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
