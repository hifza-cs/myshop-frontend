import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImage from "../../assets/mission.jpg"; // Ensure image exists

const About = () => {
  return (
    <div className="about-container bw-theme">
      <h1 className="main-heading">About Us</h1>

      <img
        src={aboutImage}
        alt="Mission"
        className="about-hero-image"
      />

      <div className="about-content">
        <div className="about-card slide-in">
          <h2 className="section-title">
            <Link to="/get-started-detail" className="heading-link">Get Started</Link>
            <span> / </span>
            <Link to="/mission-detail" className="heading-link">Our Mission</Link>
            <span> / </span>
            <Link to="/website-purpose-detail" className="heading-link">Website Purpose</Link>
          </h2>
          <p className="section-text">
            We started with a vision to bring the best quality and style to you. Our mission is to provide unmatched service with dedication and passion.
            Explore how we began and what drives us forward.
          </p>
        </div>

        <div className="about-card zoom-in">
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="reasons-list">
            <li>✔️ High-Quality Products</li>
            <li>🚚 Fast & Reliable Delivery</li>
            <li>🤝 Customer-Centric Support</li>
            <li>💰 Competitive Pricing</li>
          </ul>
        </div>

        <div className="about-card fade-in">
          <h2 className="section-title">Our Journey in Numbers</h2>
          <div className="journey-stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-box">
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
        </div>

        <div className="about-card slide-in">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-text">
            Questions or feedback? We're here to help you anytime.
          </p>
          <Link to="/contact">
            <button className="cta-button">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
