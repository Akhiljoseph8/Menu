import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3 className="footer-title">CONNECT WITH US</h3>
          <p><FaPhoneAlt /> +91 9567843340</p>
          <p><FaEnvelope /> info@deepnetsoft.com</p>
        </div>

        <div className="footer-box center">
          <h2 className="company-name"><span className="deep">DEEP</span> <span className="net">NET</span><span className="soft"> SOFT</span></h2>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div className="footer-box">
          <h3 className="footer-title">FIND US</h3>
          <p><FaMapMarkerAlt /> First floor, Gio Infopark, Infopark EXP, Kakkanad</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

