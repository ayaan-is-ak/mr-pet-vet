import { motion } from 'framer-motion';
import { FiPhone, FiClock } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Veterinary care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-900/70 to-sage-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-sage-500/20 backdrop-blur-sm border border-sage-400/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sage-200 text-sm font-medium">Available 24/7 — Open Right Now</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
          >
            Compassionate Care,{' '}
            <span className="text-sage-300">Clinical Excellence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10"
          >
            Islamabad's premier 24-hour veterinary hospital. Expert surgical care, 
            vaccinations & emergency services — led by the trusted Dr. Sheraz.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:03098808305"
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-sage-500/30 hover:shadow-sage-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <FiPhone className="w-5 h-5 group-hover:animate-bounce" />
              Call Now: 0309-8808305
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              <FiClock className="w-5 h-5" />
              Our Services
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Surgery Success Rate', value: '100%' },
              { label: 'Years of Experience', value: '10+' },
              { label: 'Happy Pet Families', value: '5K+' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-sage-300">{item.value}</span>
                <span className="text-sm text-white/50">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
