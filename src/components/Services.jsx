import React from 'react';

const services = [
  {
    title: 'Healthcare Services',
    description: 'Experience top-tier healthcare with our world-class medical treatments and expert professionals.',
    image: '/images/Home/healthcareservices.jpg'
  },
  {
    title: 'Medical Assistance',
    description: 'Comprehensive medical assistance and support throughout your healthcare journey.',
    image: '/images/Home/medicalassistance.jpg'
  },
  {
    title: 'Premium Accommodation',
    description: 'Comfortable and luxurious accommodation facilities for patients and their families.',
    image: '/images/Home/accomodation.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Why Our Service Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-32 text-center sm:text-left md:text-left">
          Seeking healthcare in a foreign country can be overwhelming. We take care of every detail, ensuring you receive top-tier care and support at every step.
         </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
