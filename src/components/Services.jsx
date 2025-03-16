import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Expert Medical Care',
    description: 'Access to world-renowned healthcare professionals and facilities across the globe.',
    icon: UserGroupIcon,
  },
  {
    name: 'Global Healthcare Network',
    description: 'Extensive network of accredited hospitals and clinics in popular medical tourism destinations.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Personalized Care',
    description: 'Tailored treatment plans and support throughout your medical journey.',
    icon: HeartIcon,
  },
  {
    name: 'Cost-Effective Solutions',
    description: 'Affordable healthcare options without compromising on quality.',
    icon: CurrencyDollarIcon,
  },
]

export default function Services() {
  return (
    <div id="services" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FF] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02] [mask-image:linear-gradient(to_bottom,white,transparent,white)]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-primary/5 rounded-full blur-3xl"></div>
      
      {/* Accent Lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-2xl lg:text-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 mb-4">
            <h2 className="text-base font-semibold leading-7 text-primary tracking-wider uppercase">Our Services</h2>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Everything you need for your medical journey
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive medical tourism services to ensure you receive the best possible care.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col backdrop-blur-sm bg-gradient-to-b from-white/80 to-white/60 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-50/30 to-transparent rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto group-hover:text-gray-900 transition-colors duration-300">{service.description}</p>
                  <p className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
