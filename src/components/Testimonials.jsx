const testimonials = [
  {
    name: 'Sarah Thompson',
    testimonial: 'Travo Health+ made my medical journey so much easier. Their support team was incredible throughout the entire process.',
    image: '/images/Testimonial/image1.jpg',
  },
  {
    name: 'Michael Chen',
    testimonial: 'I saved significantly on my treatment while receiving world-class care. Highly recommend their services!',
    image: '/images/Testimonial/image2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    testimonial: 'The coordination between international healthcare providers was seamless. Everything was taken care of professionally.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-24 text-center">Patient Testimonials</h2>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={testimonial.image} alt={testimonial.name} className="w-full h-64 object-cover rounded-t-md mb-4" />
              <h3 className="text-lg font-semibold mb-2">{testimonial.name}'s Story</h3>
              <p className="mt-2 text-gray-600 pb-4">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
