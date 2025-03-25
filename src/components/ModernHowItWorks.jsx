import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Plane, 
  Hospital, 
  UserCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './ModernHowItWorks.css';

const steps = [
  {
    icon: Search,
    title: "Research & Explore",
    description: "Browse through our comprehensive list of treatments and top-rated healthcare facilities."
  },
  {
    icon: Calendar,
    title: "Free Consultation",
    description: "Schedule a free consultation with our medical tourism experts to discuss your needs."
  },
  {
    icon: Plane,
    title: "Travel Planning",
    description: "We'll help arrange your travel, accommodation, and create a detailed treatment timeline."
  },
  {
    icon: Hospital,
    title: "Medical Treatment",
    description: "Receive world-class medical care from our network of accredited hospitals."
  },
  {
    icon: UserCheck,
    title: "Recovery & Support",
    description: "Get dedicated post-treatment support and follow-up care throughout your recovery."
  }
];

const ModernHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const scrollToStep = (index) => {
    const container = containerRef.current;
    const stepWidth = container.offsetWidth / 3;
    container.scrollTo({
      left: stepWidth * index,
      behavior: 'smooth'
    });
    setActiveStep(index);
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    const container = containerRef.current;
    const stepWidth = container.offsetWidth / 3;
    const newStep = Math.round(container.scrollLeft / stepWidth);
    setActiveStep(newStep);
  };

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      scrollToStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      scrollToStep(activeStep - 1);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    let interval;
    if (!isDragging) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = (prev + 1) % steps.length;
          scrollToStep(next);
          return next;
        });
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section className="modern-how-it-works">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <h2>How It Works</h2>
        <p>Your journey to better health made simple</p>
      </motion.div>

      <div className="steps-container-wrapper">
        <button 
          className={`nav-button prev ${activeStep === 0 ? 'disabled' : ''}`}
          onClick={prevStep}
          disabled={activeStep === 0}
        >
          <ChevronLeft />
        </button>

        <motion.div
          ref={containerRef}
          className="steps-container"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className={`step-card ${activeStep === index ? 'active' : ''}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="icon-container">
                  <Icon className="step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <button 
          className={`nav-button next ${activeStep === steps.length - 1 ? 'disabled' : ''}`}
          onClick={nextStep}
          disabled={activeStep === steps.length - 1}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="progress-dots">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`dot ${activeStep === index ? 'active' : ''}`}
            onClick={() => scrollToStep(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ModernHowItWorks;
