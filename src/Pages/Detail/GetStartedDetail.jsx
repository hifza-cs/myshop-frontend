import React from 'react';
import { Link } from 'react-router-dom';
import './DetailPages.css';

const GetStartedDetail = () => {
  return (
    <div className="details-wrapper">
      <div className="details-container">
        <h1 className="details-title">Ready to Start?</h1>
        <p className="details-description">
          Join hundreds of women who are building their dream brands. When you get started with us,
          you’re not just creating a store — you’re joining a movement. With mentorship, tools, and visibility,
          we help you turn your passion into a professional business.
        </p>

        <div className="details-buttons">
          <Link to="/signup" className="details-primary-btn">Sign Up Now</Link>
          <Link to="/about" className="details-back-link">← Back to About</Link>
        </div>
      </div>
    </div>
  );
};

export default GetStartedDetail;
