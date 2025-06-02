import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormOpen = (type) => {
    setActiveForm(type);
    setShowPopup(false);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setActiveForm(null);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="contact-wrapper">
      <h1 className="heading">Contact Us</h1>
      <p className="intro-text">We'd love to hear from you. Please choose a reason for contacting us or send a direct message.</p>

      <div className={`cards-row ${activeForm ? 'form-active' : ''}`}>
        <div className="card" onClick={() => handleFormOpen('sales')}>
          <span className="card-icon">🛍️</span>
          <h2>Contact Sales</h2>
          <p>Find the right plan for your business needs.</p>
        </div>

        <div className="card" onClick={() => handleFormOpen('support')}>
          <span className="card-icon">🛠️</span>
          <h2>Need Support?</h2>
          <p>Let us know how we can assist you.</p>
        </div>
      </div>

      {activeForm && (
        <div className="form-section">
          <form className="form-box" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>{activeForm === 'sales' ? 'Sales Inquiry' : 'Support Request'}</h3>
              <button type="button" className="close-btn" onClick={handleCloseForm}>×</button>
            </div>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      )}

      <div className="office-info-section">
        <div className="text-info">
          <h2>Visit Our Office</h2>
          <p>We're open Monday to Friday from 9AM to 5PM.</p>
          <p>Come have a chat or a cup of coffee with us.</p>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.702116533408!2d74.3360385!3d31.5203691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ddc52d3e03%3A0x62f5c1654b3e8c5b!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="bottom-contact-card">
        <div className="info-box">
          <span className="info-icon">📍</span>
          <div>
            <h4>Address</h4>
            <p>123 Web Street, Lahore</p>
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">📧</span>
          <div>
            <h4>Email</h4>
            <p>support@webshop.com</p>
          </div>
        </div>
        <div className="info-box">
          <span className="info-icon">📞</span>
          <div>
            <h4>Phone</h4>
            <p>+92 310 4236596</p>
          </div>
        </div>
      </div>

      {showPopup && <div className="popup">✅ Thank you! We’ll contact you soon.</div>}
    </div>
  );
};

export default Contact;
