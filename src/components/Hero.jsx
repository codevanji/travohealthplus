import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';

import { useState, useEffect } from 'react';

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
      <div id="home" className="relative px-6 pt-14 lg:px-8 min-h-screen" style={{
        height: '100vh',
        backgroundImage: `url('/images/Home/hero.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
  
          <h1 className="text-center text-black  text-[2rem] sm:text-[1rem] md:text-[2rem] lg:text-[3rem] font-light leading-[1.1] tracking-[0.025em] max-w-[72rem] mx-auto mb-6 hyphens-auto break-words border-0 border-solid border-gray-200 box-border font-serif opacity-1 animate-[slideUpFade_1.2s_cubic-bezier(.22,1,.36,1)_forwards] drop-shadow-md">
 
              Your Health Journey Begins with Travo Health+
            </h1>
        
            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-semibold 
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                    ">
              Experience world-class healthcare in India with our comprehensive medical tourism platform<br />

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
        `}
      </style>
    </>
  );
};

export default Hero;
