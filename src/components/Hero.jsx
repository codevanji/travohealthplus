import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';

import { useState, useEffect } from 'react';
import OptimizedImage from './common/OptimizedImage';
import './Hero.css';

const systemFontStack = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const specialties = [
  { value: 'orthopedic', label: 'Orthopedic' },
  { value: 'oncology', label: 'Oncology' },
  { value: 'genitourinary', label: 'Genitourinary' },
  { value: 'general-surgery', label: 'General Surgery' },
  { value: 'paediatrics', label: 'Paediatrics' },
  { value: 'spine-surgery', label: 'Spine Surgery' }
];

const locations = [
  { value: 'mangalore', label: 'Mangalore' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'kochi', label: 'Kochi' },
  { value: 'chennai', label: 'Chennai' }
];

const SelectArrowIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const treatments = [
  'Acne Treatment',
  'Aromatherapy',
  'Dental Treatment',
  'Eye Surgery',
  'Hair Transplant',
  'Knee Replacement',
  'Orthopedic Surgery',
  'Plastic Surgery',
  'Weight Loss Surgery'
];

const Hero = () => {
  const [specialty, setSpecialty] = useState('');
  const [country, setCountry] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (!specialty || !country) {
      alert('Please select both specialty and location');
      return;
    }
    console.log('Searching for:', { specialty, country });
    // Add your search logic here
  };

  return (
    <>
      <div id="home" className="hero-section relative px-6 pt-14 lg:px-8 min-h-screen overflow-hidden h-[100vh] bg-hero bg-cover bg-left center bg-no-repeat">
        {/* Floating Medical Icons */}
        <div className="floating-icons">
          <svg className="floating-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <svg className="floating-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H8v-2h4V7h2v10z"/>
          </svg>
          <svg className="floating-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
          </svg>
          <svg className="floating-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
          </svg>
          <svg className="floating-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-8h2v6h-2z"/>
          </svg>
        </div>
        {/* Heartbeat Line */}
        <div className="heartbeat-line">
          <svg viewBox="0 0 600 100" preserveAspectRatio="none">
            <path
              d="M0 50 
                 L100 50 
                 L130 50 
                 L140 20 
                 L150 80 
                 L160 20 
                 L170 80 
                 L180 50 
                 L200 50 
                 L500 50"
              strokeDasharray="1000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
  
  
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              {Array.from("Your Trusted Partner in Medical Tourism").map((char, index) => (
                <span key={index} className={`text-transparent bg-clip-text bg-gradient-to-r ${index % 2 === 0 ? 'from-white to-[#A0C4E1]' : 'from-[#A0C4E1] to-white'}`}>{char}</span>
              ))}
            </h1>
        
            <br></br><p className="text-lg md:text-xl text-gray-600 font-light tracking-wide leading-relaxed text-white">
 
              Plan your medical journey with ease. Affordable, high-quality treatment in India.<br />

            </p>

            {/* Desktop Search Section */}
            <div className="absolute top-[70%] w-full hidden md:block">
              <div className="max-w-4xl mx-auto flex justify-center items-center gap-4">
                <div className="w-64"> 
                  <select 
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-[var(--primary-color)] hover:border-[var(--primary-color)] cursor-pointer z-30"
                  > 
                    <option value="">Choose Specialty</option>
                    {specialties.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="w-64"> 
                  <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-300 focus:outline-none focus:border-[var(--primary-color)] hover:border-[var(--primary-color)] cursor-pointer z-30"
                  > 
                    <option value="">Choose Location</option>
                    {locations.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <button 
                  onClick={handleSearch}
                  className="h-12 w-12 bg-[var(--primary-color)] text-black rounded-full hover:bg-[var(--db)] transition-colors duration-300 flex items-center justify-center"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>

            {/* Mobile Search Section */}
            <div className="absolute top-[70%] w-full md:hidden px-4 z-50">
              <div className="max-w-sm mx-auto flex flex-col gap-3">
               <div className="w-72 relative search-container mx-auto">
                  <input
                    type="text"
                    placeholder="Search for treatments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsDropdownOpen(true)}
                    className="w-full px-4 py-2.5 bg-white text-gray-600 text-sm rounded-t-2xl border border-gray-200 focus:outline-none focus:border-gray-300 placeholder-gray-400 relative z-50"
                  />
                  {isDropdownOpen && (
                    <div 
                      className="absolute z-50 left-0 right-0 bg-white rounded-b-2xl shadow-sm border-x border-b border-gray-200 max-h-60 overflow-y-auto -mt-[1px]"
                    >
                      {treatments
                        .filter(item => 
                          item.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((item, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-600 text-sm text-left"
                            onClick={() => {
                              setSearchTerm(item);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {item}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <style>
        {`
          select {
            position: relative;
          }
          select option {
            background: white;
            color: black;
            padding: 8px;
          }
          @media (max-width: 768px) {
            .search-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
            }

            .search-section select,
            .search-section button {
              width: 73%;
            }
          }
          .bg-hero {
            background-image: url('/images/Home/hero.webp');
          }
        `}
      </style>
    </>
  );
};

export default Hero;
