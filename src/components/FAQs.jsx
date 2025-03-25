import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQs.css';

const faqs = [
  {
    question: "How do I know which hospital is best for me?",
    answer: "We help you choose the best hospital based on several factors including your specific medical condition, preferred location, budget, and the hospital's specialization and accreditation. Our team carefully evaluates each hospital's success rates, patient reviews, and international certifications to ensure you receive the highest quality care."
  },
  {
    question: "What about visa & travel arrangements?",
    answer: "Our comprehensive service includes complete assistance with visa processing and travel arrangements. We help coordinate with the embassy, prepare necessary medical documents, arrange airport pickups, book accommodations, and plan local transportation. You'll have a dedicated coordinator to ensure smooth travel logistics."
  },
  {
    question: "How much does medical treatment in India cost?",
    answer: "Medical treatments in India typically cost 60-80% less than in Western countries while maintaining international quality standards. The exact cost depends on the procedure, hospital, and length of stay. We provide detailed cost breakdowns and help you choose options that fit your budget without compromising on quality."
  },
  {
    question: "What support do you provide during my treatment?",
    answer: "We offer end-to-end support including a personal medical coordinator, language interpretation services, daily hospital visits, coordination with doctors, and regular updates to your family. Our team is available 24/7 to address any concerns during your treatment."
  },
  {
    question: "Are the doctors and hospitals internationally accredited?",
    answer: "Yes, we exclusively partner with internationally accredited hospitals and work with doctors who have extensive experience and recognized credentials. Many of our partner hospitals are JCI-accredited and our doctors are often trained in top global institutions."
  },
  {
    question: "What happens after my treatment?",
    answer: "We provide comprehensive post-treatment support including follow-up care coordination, medication guidance, and recovery monitoring. We also help arrange follow-up consultations with your doctors and provide detailed medical reports for your local healthcare provider."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="question-icon" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faqs-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about medical tourism in India</p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
