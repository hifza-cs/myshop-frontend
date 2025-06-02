import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import './Footer.css';
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Description */}
        <div className="footer-section brand">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="WomenHub Logo" className="footer-logo" />
          </Link>
          <p className="footer-text">Empowering Women Entrepreneurs with resources, networking, and support.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4 className="footer-heading">Connect With Me</h4>

          <a href="https://wa.me/923104236596" target="_blank" rel="noreferrer">
            <FaWhatsapp /> 0310 4236596
          </a>

          <a href="https://www.linkedin.com/in/hifsa" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn: Hifsa
          </a>

          <a href="mailto:h09816hafsa@gmail.com">
            <FaEnvelope /> h09816hafsa@gmail.com
          </a>

          <a href="https://github.com/hifza-cs" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub: hifza-cs
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WomenHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
