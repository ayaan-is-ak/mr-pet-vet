import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Naimal Haq',
    role: 'Cat Parent',
    rating: 5,
    text: "Dr. Sheraz is nothing short of exceptional. He spayed all three of my cats with such skill and precision — every recovery was seamless. His follow-up care via WhatsApp gave me so much peace of mind. Mr. Pet & Vet is hands down the best veterinary clinic in Islamabad.",
    avatar: '🐱',
    bgGradient: 'from-rose-50 to-pink-50',
  },
  {
    name: 'Azaan Shah',
    role: 'Dog Owner',
    rating: 5,
    text: "When my dog needed emergency surgery at 2 AM, Mr. Pet & Vet was the only clinic that answered. Dr. Sheraz handled everything with such calm professionalism. The surgery was a complete success and the post-op support was phenomenal. I cannot recommend this hospital enough!",
    avatar: '🐕',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    name: 'Yasir Ghafoor',
    role: 'Multi-Pet Household',
    rating: 5,
    text: "Managing vaccinations and health checkups for my 8 cats used to be a nightmare until I found Mr. Pet & Vet. Dr. Sheraz organized everything so efficiently — each cat has their own vaccination card and schedule. The clinic is always spotless and stress-free for my babies.",
    avatar: '🏡',
    bgGradient: 'from-sage-50 to-emerald-50',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal-800 mb-4">
            Loved by Pet{' '}
            <span className="gradient-text">Families</span>
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Don't just take our word for it — hear from pet parents who trust us with their beloved companions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-sage-200/30 border border-sage-100/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-sage-100 font-serif leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-charcoal-600 leading-relaxed mb-8 relative z-10">"{testimonial.text}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-sage-100">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.bgGradient} rounded-xl flex items-center justify-center text-xl`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
