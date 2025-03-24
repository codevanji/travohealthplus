import React, { useState, useRef } from 'react';

const Clients = () => {
  const clients = [
    { name: 'Apollo', logo: '/images/Client/Apollo logo.webp' },
    { name: 'Columbia Asia', logo: '/images/Client/ColumbiaAsiaLogo.webp' },
    { name: 'First Neuro', logo: '/images/Client/FirstNeuro logo.webp' },
    { name: 'Fortis', logo: '/images/Client/Fortis logo.webp' },
    { name: 'Hinduja', logo: '/images/Client/HindujaLogo.webp' },
    { name: 'KMC', logo: '/images/Client/KMC_logo.webp' },
    { name: 'Kanachur', logo: '/images/Client/Kanachur logo.webp' },
    { name: 'Lilavati', logo: '/images/Client/LilavatiLogo.webp' },
    { name: 'Nanavati', logo: '/images/Client/NanavatiLogo.webp' },
    { name: 'Orthomed', logo: '/images/Client/OrthomedLogo.webp' },
    { name: 'Saifee', logo: '/images/Client/SaifeeLogo.webp' },
    { name: 'Sims', logo: '/images/Client/SimsLogo.webp' },
    { name: 'VS', logo: '/images/Client/VSLogo.webp' },
    { name: 'Vinita', logo: '/images/Client/VinitaLogo.webp' },
    { name: 'Vkiram', logo: '/images/Client/VkiramLogo.webp' },
    { name: 'YENAOYA', logo: '/images/Client/YENAPOYAlogo.webp' },
    { name: 'AJ Hospital', logo: '/images/Client/aj-logo.webp' },
    { name: 'Narayana Health', logo: '/images/Client/narayanaHealth logo.webp' },
    { name: 'Unity Hospital', logo: '/images/Client/unity-hospital-logo.webp' }
  ];

  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-24 text-center">Our Elite Medical Partners</h2>
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div 
            ref={scrollContainer}
            className="flex space-x-12 py-8 px-4 items-center overflow-x-auto scrollbar-hide"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-none"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
