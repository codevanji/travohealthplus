import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { 
  UserGroupIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

const stats = [
  {
    number: '81+',
    label: 'Million Covered Lives Served by 5 Solutions',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop'
  },
  {
    number: '130+',
    label: 'Customers',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop'
  },

  {
    number: '48+',
    label: 'States Supported With 23 Medicare Advantage Clients',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop'
  }
];

const services = [
  {
    name: 'Expert Medical Care',
    description: 'Access to world-renowned healthcare professionals and facilities across the globe.',
    icon: UserGroupIcon,
  },
  {
    name: 'Global Healthcare Network',
    description: 'Extensive network of accredited hospitals and clinics in popular medical tourism destinations.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Personalized Care',
    description: 'Tailored treatment plans and support throughout your medical journey.',
    icon: HeartIcon,
  },
  {
    name: 'Cost-Effective Solutions',
    description: 'Affordable healthcare options without compromising on quality.',
    icon: CurrencyDollarIcon,
  },
]

const ExpandableCard = ({ number, label, bgColor, textColor, image, index, activeIndex, setActiveIndex }) => {
  const isExpanded = index === activeIndex;

  const handleClick = () => {
    if (isExpanded) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative h-[300px] w-[280px]" onClick={handleClick}>
      <motion.div
        initial={false}
        animate={{
          width: isExpanded ? '400px' : '300px',
          x: '0%',  // Uniform expansion from left to right
    
          zIndex: isExpanded ? 50 : 0
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute inset-0 overflow-hidden rounded-2xl shadow-lg ${bgColor} transition-all duration-300`}
        style={{
          transformOrigin: 'center',
          marginLeft: '0',
          marginRight: '0'
        }}
      >
        <div className={`relative h-full flex rounded-2xl ${bgColor}`}>
          <div className={`w-full h-full p-10 flex flex-col justify-between ${textColor}`}>
            <div>
              <motion.h3
                className={`text-5xl font-bold mb-4 ${textColor}`}
                initial={false}
                animate={{ scale: isExpanded ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                {number}
              </motion.h3>
              <h6 className={`text-sm font-medium ${textColor} opacity-90`}>{label}</h6>
            </div>
            
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              href="#contact"
              className={`inline-block w-fit px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300
                ${bgColor === 'bg-blue-500' 
                  ? 'bg-white text-blue-500 hover:bg-blue-50 hover:scale-105' 
                  : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'}`}
            >
              See Our Solutions
            </motion.a>
          </div>

          {/* Image Side - Only visible when expanded */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-full relative overflow-hidden"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Second card expanded by default
  return (
    <div id="services" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FF] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02] [mask-image:linear-gradient(to_bottom,white,transparent,white)]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-primary/5 rounded-full blur-3xl"></div>
      
      {/* Accent Lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl lg:text-center"
        >
          <div className="flex justify-center items-center space-x-2">   
            <h2 className="text-base font-semibold leading-7 text-primary tracking-wider uppercase">Our Services</h2>
          </div>
          <div className="my-24" />
        </motion.div>

  
          <div className="flex justify-center items-center space-x-20">
            {stats.map((stat, index) => (
              <div key={stat.number} className="relative" style={{
                zIndex: activeIndex === index ? 10 : 1,
                transform: (activeIndex === 0 && index > 0) || (activeIndex === 1 && index > 1) ? 'translateX(50px)' : 'translateX(0)'
              }}>
              <ExpandableCard
                  {...stat}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
              </div>
            ))}
          </div>


        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col backdrop-blur-sm bg-gradient-to-b from-white/80 to-white/60 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-50/30 to-transparent rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
                  <p className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;
