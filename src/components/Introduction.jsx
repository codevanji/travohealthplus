export default function Introduction() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
            Your Journey to Healing Begins Here
            </h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                The right answers the first time
              </h3>
              <p className="text-gray-600 leading-relaxed">
              The right treatment starts with the right diagnosis. Our experts diagnose and treat the toughest medical challenges.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Top-ranked in healthcare
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Travo Health+ partners with more top-ranked hospitals than any other medical tourism provider according to international healthcare standards.
              </p>
            </div>
            <button className="mt-8 inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-200">
              Why choose Travo Health+
            </button>
          </div>
          <div className="relative">
            <img
              src="/images/Home/healing.jpg"
              alt="Healthcare Professional"
              className="w-full rounded-lg shadow-lg object-cover h-[600px]"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/Home/worldclasstraetment.jpg"
              alt="World-class Healthcare"
              className="w-full rounded-lg shadow-lg object-cover h-[600px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              World-class care for global patients
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
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
