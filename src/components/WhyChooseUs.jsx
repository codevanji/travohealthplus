import React from 'react';
import './WhyChooseUs.css';
import { FaCheckCircle, FaHospital, FaUserMd, FaPiggyBank } from 'react-icons/fa';

const WhyChooseUs = () => {
  const cards = [
    { 
      title: 'High Success Rate', 
      description: 'Over 95% success rate with thousands of satisfied patients worldwide.',
      icon: <FaCheckCircle className="card-icon-svg" />
    },
    { 
      title: 'Verified Hospitals', 
      description: 'Partnered with JCI-accredited hospitals and world-renowned medical facilities.',
      icon: <FaHospital className="card-icon-svg" />
    },
    { 
      title: 'Personalized Assistance', 
      description: '24/7 dedicated support team to guide you through every step of your medical journey.',
      icon: <FaUserMd className="card-icon-svg" />
    },
    { 
      title: 'Cost Savings', 
      description: 'Save up to 70% on medical treatments compared to costs in Western countries.',
      icon: <FaPiggyBank className="card-icon-svg" />
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
