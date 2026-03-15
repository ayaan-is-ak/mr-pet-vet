import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const services = [
  {
    emoji: '🔬',
    title: 'Surgical Excellence',
    subtitle: 'Spaying & Neutering Specialists',
    description:
      'Industry-leading success in spay and neuter procedures. Dr. Sheraz brings years of specialized surgical experience with a zero-complication recovery track record.',
    features: ['Advanced surgical techniques', 'Pre-op health assessments', 'Zero-complication recovery rate', 'Safe anesthesia protocols'],
    accent: 'from-sage-400 to-sage-600',
    accentBg: 'bg-sage-50',
    accentText: 'text-sage-700',
  },
  {
    emoji: '💉',
    title: 'Vaccinations',
    subtitle: 'Complete Immunization Programs',
    description:
      'Comprehensive vaccine schedules for puppies, kittens, and adult pets. We keep your furry friends protected from preventable diseases year-round.',
    features: ['Core & non-core vaccines', 'Kitten & puppy packages', 'Annual booster programs', 'Digital vaccination records'],
    accent: 'from-blue-400 to-blue-600',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
  },
  {
    emoji: '🚨',
    title: 'Emergency Care',
    subtitle: '24/7 Emergency Services',
    description:
      'Midnight emergencies or weekend crises — our doors at A-3 Plaza are always open. We provide immediate triage, diagnostics, and critical care when your pet needs it most.',
    features: ['24-hour availability', 'Rapid triage & diagnostics', 'Critical care management', 'Trauma stabilization'],
    accent: 'from-red-400 to-red-600',
    accentBg: 'bg-red-50',
    accentText: 'text-red-700',
  },
  {
    emoji: '📱',
    title: 'Post-Op Consultation',
    subtitle: 'Concierge Recovery Support',
    description:
      'Dr. Sheraz personally follows up with every surgical patient via WhatsApp and phone. Get real-time guidance on medications, wound care, and recovery milestones.',
    features: ['Personal WhatsApp follow-ups', 'Video call consultations', 'Medication reminders', 'Recovery milestone tracking'],
    accent: 'from-violet-400 to-violet-600',
    accentBg: 'bg-violet-50',
    accentText: 'text-violet-700',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-warm-white relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal-800 mb-4">
            Everything Your Pet{' '}
            <span className="gradient-text">Deserves</span>
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            From routine check-ups to life-saving surgeries, we provide world-class veterinary care with the warmth of family.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-sage-200/40 border border-sage-100/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Emoji Icon */}
              <div className={`w-14 h-14 ${service.accentBg} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.emoji}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-charcoal-800 mb-1">{service.title}</h3>
              <p className={`text-sm font-medium ${service.accentText} mb-3`}>{service.subtitle}</p>
              <p className="text-charcoal-500 leading-relaxed mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-600">
                    <FiCheckCircle className={`w-4 h-4 ${service.accentText} shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
