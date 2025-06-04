import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {submitted && (
        <div className="top-message">
          🎉 Thank you! We’ll get back to you soon.
        </div>
      )}
      <div className="contact-container">
        <div className="contact-glass-card">
          <div className="contact-left">
            <img
              src="https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="contact"
              className="contact-img"
            />
          </div>
          <div className="contact-right">
            <h2 className="contact-heading">Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <div className="contact-details">
              <p><strong>Email:</strong> support@webshop.com</p>
              <p><strong>Location:</strong> Lahore, Pakistan</p>
              <div className="icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
