import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedin } from 'react-icons/fa';
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

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://plus.google.com" target="_blank" rel="noreferrer">
            <FaGooglePlusG />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} WomenHub</p>
      </div>
    </footer>
  );
};

export default Footer;