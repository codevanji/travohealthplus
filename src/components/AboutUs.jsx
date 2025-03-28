import React from 'react';

const AboutUs = () => {
  const stats = [
    { id: 1, name: 'Successful Treatments', value: '500+' },
    { id: 2, name: 'Partner Hospitals', value: '50+' },
    { id: 3, name: 'Countries Served', value: '20+' },
    { id: 4, name: 'Patient Satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/videocoverpage/coverpage1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* About Us Header */}
      <div className="relative z-10 text-center mb-12">
      <h2 className="text-3xl md:text-3xl lg:text-4xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-center text-white mb-6">About Us</h2>
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
              <h2 className="text-2xl md:text-xl lg:text-2xl sm:text-lg  font-semibold text-gray-900 leading-relaxed tracking-[0.1em] text-white mb-6">
               
                Empowering Global Medical Journeys
              </h2>
              <p className="text-base md:text-lg lg:text-xl sm:text-md  text-[#4A4A4A] leading-relaxed mb-8 
                        tracking-[0.03em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                        text-left
                        text-white"
                    > At Travo Health Plus, we specialize in connecting global medical travelers with world-class healthcare facilities. Our mission is to provide comprehensive care solutions, ensuring a seamless and successful treatment journey.
              </p>

              {/* Stats Section */}
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 mb-20">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col items-center gap-y-3 px-4"
                  >
                    <dt className="text-xs leading-6 text-gray-300 tracking-wider mb-8 ">{stat.name}</dt>
                    <dd className="order-first font-light tracking-tight md:text-2xl lg:text-3xl sm:text-sm bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent font-serif drop-shadow-sm transition-all duration-500 ease-in-out hover:scale-105 hover:drop-shadow-lg">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <button className=" relative
                    mx-auto
                    block
                    w-64
                    rounded-full
                    bg-gradient-to-r
                    from-primary
                    to-[#0891b2]
                    px-6
                    py-3
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    ease-in-out
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]
                    active:scale-95">
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
