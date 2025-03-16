const testimonials = [
  {
    body: 'Travo Health+ made my medical journey so much easier. Their support team was incredible throughout the entire process.',
    author: {
      name: 'Sarah Thompson',
      handle: 'Medical Tourism Patient',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
  },
  {
    body: 'I saved significantly on my treatment while receiving world-class care. Highly recommend their services!',
    author: {
      name: 'Michael Chen',
      handle: 'International Patient',
      imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
    },
  },
  {
    body: 'The coordination between international healthcare providers was seamless. Everything was taken care of professionally.',
    author: {
      name: 'Emily Rodriguez',
      handle: 'Healthcare Professional',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our patients say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
                <div>
                  <p className="text-lg leading-6 text-gray-900">{testimonial.body}</p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author.name}</h3>
                    <p className="text-sm leading-6 text-gray-600">{testimonial.author.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
