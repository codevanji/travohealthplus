export default function Features() {
  return (
    <div id="features" className="overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center mb-8">
          <h2 className="text-base font-semibold leading-7 text-primary">ABOUT US</h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to receive healthcare</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience seamless medical tourism with our comprehensive platform that takes care of everything.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      ★
                    </div>
                    End-to-end support.
                  </dt>
                  <dd className="inline"> From treatment selection to post-care follow-up, we're with you every step of the way.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      ★
                    </div>
                    Transparent pricing.
                  </dt>
                  <dd className="inline"> Clear cost breakdowns with no hidden fees or surprises.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                      ★
                    </div>
                    Quality assurance.
                  </dt>
                  <dd className="inline"> All our partner facilities are thoroughly vetted and accredited.</dd>
                </div>
              </dl>
            
            </div>
          </div>
          <video
            src="/Videos/VIDEO-2025-03-17-01-30-58.mp4"
            alt="Medical facility"
            className="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            controls
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  )
}
