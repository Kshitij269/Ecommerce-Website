// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CgMouse } from 'react-icons/cg';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+123 456 789</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>support@ecommerce.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 eCommerce St, Online City, Web</span>
          </div>
        </div>
        <div className="contact-form">
          <h2>Drop Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">
              Send Message <CgMouse className="mouse-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
