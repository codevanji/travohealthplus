import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Explore Treatment Options",
    description: "Browse through our comprehensive list of medical treatments and healthcare facilities.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Submit Patient Information",
    description: "Fill out our secure patient information form and upload any relevant medical records.",
    icon: "📝"
  },
  {
    id: 3,
    title: "Patient Coordinator Contacts You",
    description: "Our dedicated coordinator will reach out to discuss your needs and preferences.",
    icon: "👥"
  },
  {
    id: 4,
    title: "Consult with Doctors",
    description: "Connect with experienced healthcare professionals to discuss your treatment plan.",
    icon: "👨‍⚕️"
  },
  {
    id: 5,
    title: "Receive Treatment Plan & Quote",
    description: "Get a detailed treatment plan and transparent cost breakdown.",
    icon: "📊"
  },
  {
    id: 6,
    title: "Travel for Medical Procedure",
    description: "We'll assist with travel arrangements and ensure a smooth medical journey.",
    icon: "✈️"
  }
];

const Step = ({ step, isActive, progress }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: step.id * 0.2 
          }
        }
      }}
      className={`relative flex flex-col items-center ${
        isActive ? 'scale-105 transition-transform duration-300' : ''
      }`}
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl
            ${isActive 
              ? 'bg-[var(--primary-color)] text-white shadow-lg' 
              : 'bg-gray-100 text-gray-600'
            } transition-all duration-300`}
        >
          {step.icon}
        </motion.div>
        {step.id < 6 && (
          <div className="absolute top-1/2 left-full w-full h-1 bg-gray-200 transform -translate-y-1/2">
            <div
              className="h-full bg-[var(--primary-color)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-center">{step.title}</h3>
      <p className="mt-2 text-sm text-gray-600 text-center max-w-[200px]">
        {step.description}
      </p>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight - top) / (height + windowHeight);
      
      // Calculate which step should be active based on scroll progress
      const stepProgress = Math.floor(scrollProgress * 6);
      if (stepProgress >= 1 && stepProgress <= 6) {
        setActiveStep(stepProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-3xl lg:text-4xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-center text-black mb-6">
            How It Works
          </h2>
          <p className="text-base md:text-lg lg:text-xl sm:text-md  text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                        text-left md:text-center"
                    >
            Your journey to better health is just 6 simple steps away
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-6 gap-8 px-4">
          {steps.map((step) => (
            <Step
              key={step.id}
              step={step}
              isActive={step.id === activeStep}
              progress={step.id < activeStep ? 100 : 0}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl
                  ${step.id === activeStep 
                    ? 'bg-[var(--primary-color)] text-white' 
                    : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl md:text-xl lg:text-2xl sm:text-lg  font-semibold text-gray-900 leading-relaxed tracking-[0.1em]">{step.title}</h3>
              <p className="text-base sm:text-md text-black leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2rem] 
                        px-4 lg:px-0"
                    >{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
