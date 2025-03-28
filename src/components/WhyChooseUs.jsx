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
      <h2 className="text-3xl md:text-3xl lg:text-4xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-center text-black mb-6" style={{ marginBottom: '4rem' }}>Why Choose Us</h2>
      <div className="cards-container" style={{ marginTop: '2rem' }}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="md:text-lg lg:text-xl sm:text-lg leading-relaxed tracking-[0.2em] font-semibold text-gray-900 text-left text-black mb-6">{card.title}</h3>
            <p className="text-base sm:text-md text-black leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2rem] 
                        px-4 lg:px-0 text-left">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
