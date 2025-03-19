import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/videocoverpage/coverpage1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* About Us Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">About Us</h2>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Floating Card */}
          <div className="backdrop-blur-md bg-white/10 p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>

            {/* Content */}
            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Empowering Global Medical Journeys
              </h2>
              <p className="text-lg md:text-md text-gray-200 mb-8 leading-relaxed">
                At Travo Health Plus, we specialize in connecting global medical travelers with world-class healthcare facilities. Our mission is to provide comprehensive care solutions, ensuring a seamless and successful treatment journey.
              </p>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-300">Successful Treatments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-gray-300">Partner Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-gray-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-gray-300">Patient Satisfaction</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutUs;
