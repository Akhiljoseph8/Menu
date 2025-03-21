import React, { useState } from "react";
import "./Header.css";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
        <h2 className="company-name"><span className="deep">DEEP</span> <span className="net">NET</span><span className="soft"> SOFT</span></h2>
        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>

        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">MENU</a></li>
            <li><a href="/">MAKE A RESERVATION</a></li>
            <li><a href="/">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
