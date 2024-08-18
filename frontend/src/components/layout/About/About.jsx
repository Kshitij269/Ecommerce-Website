// src/components/About/About.jsx
import React from 'react';
import './aboutSection.css';
import { FaCheckCircle } from 'react-icons/fa';
// import TeamImage from '../../assets/team.jpg'; // Replace with your image path
// import StoreImage from '../../assets/store.jpg'; // Replace with your image path

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey and values.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              We started as a small family-run business in 2010, with a passion for delivering quality products to our customers. Over the years, we have grown into a trusted name in the eCommerce industry, thanks to our commitment to excellence and customer satisfaction.
            </p>
            <ul>
              <li><FaCheckCircle className="about-icon" /> Quality Products</li>
              <li><FaCheckCircle className="about-icon" /> Exceptional Customer Service</li>
              <li><FaCheckCircle className="about-icon" /> Fast and Reliable Delivery</li>
            </ul>
          </div>
          {/* <div className="about-image">
            <img src={StoreImage} alt="Our Store" />
          </div> */}
        </section>

        <section className="about-section reverse">
          <div className="about-text">
            <h2>Meet Our Team</h2>
            <p>
              Our team is the heart of our company. Each member brings their unique talents and dedication to ensure that our customers receive the best possible experience.
            </p>
            <p>
              From our friendly customer service representatives to our skilled warehouse staff, we work together to make sure you get the products you love, delivered right to your door.
            </p>
          </div>
          {/* <div className="about-image">
            <img src={TeamImage} alt="Our Team" />
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default About;
