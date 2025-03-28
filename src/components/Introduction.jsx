import OptimizedImage from './common/OptimizedImage';

export default function Introduction() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <h2 className="text-3xl md:text-3xl lg:text-4xl sm:text-2xl leading-relaxed tracking-[0.1em] font-semibold text-gray-900 text-left mb-4">
          Your Journey to Healing Begins Here
            </h2>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-xl lg:text-2xl sm:text-lg  font-semibold text-gray-900 leading-relaxed tracking-[0.1em]">
                The right answers the first time
              </h3>
                
            <p className="text-base md:text-lg lg:text-xl sm:text-md  text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8 
                        tracking-[0.07em] 
                        font-sans 
                        font-light
                        xl:leading-[2.5rem] 
                        px-4 lg:px-0
                    ">
              The right treatment starts with the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
              </p>
            </div>
            <div className="space-y-4">
            <h3 className="text-2xl md:text-xl lg:text-2xl sm:text-lg  font-semibold text-gray-900 leading-relaxed tracking-[0.1em]">
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

      
      </div>
    </div>
  )
}
