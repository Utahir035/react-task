// import React from 'react'
// import './header.css'
// import {FaMobileAlt} from 'react-icons/fa'
// import {VscThreeBars} from "react-icons/vsc"


// function Header() {
//   return (
//     <div className='header'>
//         <div className='logo'>
//             DENVER <span className='line'>|</span>
//         </div>
//         <div className="web">
//     <div className="web-option">
//         <a href="#projects" >
//           About
//         </a>
//     </div>
//     <div className="web-option">
//         <a href="#skills">
//         Services
//         </a>
//     </div>
//     <div className="web-option">
//         <a href="#work">
//       Team
//         </a>
//     </div>
//     <div className="web-option">
//         <a href="#work">
//       Pricing
//         </a>
//     </div>
//     <div className="web-option">
//         <a href="#contact">
//        Contact Us
//         </a>
//     </div>
//   </div>
//   <div className='contact'>
//     +1235 430 4056 <span className='mobile'><FaMobileAlt/></span>
//   </div>
//   <div className='button'>
//     <VscThreeBars/>
//   </div>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import './header.css'; // Import your CSS file
import {FaMobileAlt} from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> DENVER <span className='line'>|</span></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/prices">Prices</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className='contact'>
      +1235 430 4056 <span className='mobile'><FaMobileAlt/></span>
     </div>
    </nav>
  );
}

export default Header;
