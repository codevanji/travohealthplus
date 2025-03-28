import React from 'react';
import OptimizedImage from './common/OptimizedImage';
import './PopularTreatments.css';

const PopularTreatments = () => {
    const treatments = [
        { id: 1, name: 'Orthopedic', image: '/images/Treatments/Orthopedic.webp' },
        { id: 2, name: 'Dental', image: '/images/Treatments/dental.webp' },
        { id: 3, name: 'Oncology', image: '/images/Treatments/Oncology.webp' },
        { id: 4, name: 'Cardiology', image: '/images/Treatments/Cardiology.webp' },
        { id: 5, name: 'Dermatology', image: '/images/Treatments/Dermatology.webp' }, 
        { id: 6, name: 'Spin Surgery', image: '/images/Treatments/spinetreatment.webp' },
        { id: 7, name: 'Cosmetic Surgery', image: '/images/Treatments/cosmeticsurgery.webp' },
        { id: 8, name: 'Ayurveda', image: '/images/Treatments/Ayurveda.webp' }
    ];

    return (
        <section id="popular-treatments-scroll" className="popular-treatments">
            <div className="container">
            <h2 className="text-3xl md:text-3xl lg:text-4xl leading-relaxed tracking-[0.2em] font-light text-gray-900 text-center mb-6">
              Treatments
            </h2>
         <div className="treatments-grid">
                    {treatments.map(treatment => (
                        <div key={treatment.id} className="treatment-card">
                            <div className="image-container">
                                <OptimizedImage src={treatment.image} alt={treatment.name} className="treatment-image" />
                                <div className="image-overlay"></div>
                                <div className="overlay-effect"></div>
                            </div>
                            <h3 className="treatment-title">{treatment.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center tracking-[0.1em] font-light mt-8">
                    <button className="more-treatments-btn">
                        More Treatments
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularTreatments;
