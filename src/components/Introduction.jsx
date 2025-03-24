import OptimizedImage from './common/OptimizedImage';

export default function Introduction() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Your Journey to Healing Begins Here
            </h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                The right answers the first time
              </h3>
                
            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                    ">
              The right treatment starts with the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Top-ranked in healthcare
              </h3>
              <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                    ">
                Travo Health+ partners with more top-ranked hospitals than any other medical tourism provider according to international healthcare standards.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200">
              Why choose Travo Health+
            </button>
          </div>
          <div className="relative">
            <OptimizedImage
              src="/images/Home/healing.webp"
              alt="Healthcare Professional"
              className="w-full rounded-lg shadow-lg object-cover h-[300px] md:h-[600px]"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <OptimizedImage
              src="/images/Home/worldclasstraetment.webp"
              alt="World-class Healthcare"
              className="w-full rounded-lg shadow-lg object-cover h-[300px] md:h-[600px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              World-class care for global patients
            </h2>
            <div className="space-y-4">
            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.06em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                    ">
                We make it easy for patients around the world to get care from our network of internationally accredited hospitals and healthcare providers.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200">
              International services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
