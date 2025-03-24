import React from 'react';
import './PopularTreatments.css';

const PopularTreatments = () => {
    const treatments = [
        { id: 1, name: 'Orthopedic', image: '/images/Treatments/Orthopedic.jpg' },
        { id: 2, name: 'Dental', image: '/images/Treatments/dental.jpg' },
        { id: 3, name: 'Oncology', image: '/images/Treatments/Oncology.jpg' },
        { id: 4, name: 'Cardiology', image: '/images/Treatments/Cardiology.jpg' },
        { id: 5, name: 'Dermatology', image: '/images/Treatments/Dermatology.jpg' }, 
        { id: 6, name: 'Spin Surgery', image: '/images/Treatments/spinetreatment.jpg' },
        { id: 7, name: 'Cosmetic Surgery', image: '/images/Treatments/cosmeticsurgery.jpg' },
        { id: 8, name: 'Physiotherapy', image: '/images/Treatments/Physiotherapy.jpg' }
    ];

    return (
        <section id="popular-treatments-scroll" className="popular-treatments">
            <div className="container">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 text-center">
            Treatments </h2>
             <div className="treatments-grid">
                    {treatments.map(treatment => (
                        <div key={treatment.id} className="treatment-card">
                            <div className="image-container">
                                <img src={treatment.image} alt={treatment.name} className="treatment-image" />
                                <div className="image-overlay"></div>
                                <div className="overlay-effect"></div>
                            </div>
                            <h3 className="treatment-title">{treatment.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="more-treatments-btn">
                        More Treatments
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PopularTreatments;
