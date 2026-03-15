import { motion } from 'framer-motion';
import { FiActivity, FiClock, FiHeart, FiAward } from 'react-icons/fi';

const stats = [
  {
    icon: FiActivity,
    value: '100%',
    label: 'Surgery Success Rate',
    description: 'Zero-complication track record',
    gradient: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: FiClock,
    value: '24/7',
    label: 'Always Open',
    description: 'Round-the-clock emergency care',
    gradient: 'from-sage-400 to-sage-600',
    bg: 'bg-sage-50',
    iconColor: 'text-sage-600',
  },
  {
    icon: FiHeart,
    value: '5,000+',
    label: 'Pets Treated',
    description: 'Trusted by Islamabad families',
    gradient: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: FiAward,
    value: '10+',
    label: 'Years Experience',
    description: 'Proven clinical expertise',
    gradient: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-sage-200/50 border border-sage-100/60 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal-800 mb-1">{stat.value}</h3>
                <p className="text-sm font-semibold text-charcoal-700 mb-1">{stat.label}</p>
                <p className="text-xs text-charcoal-400">{stat.description}</p>

                {/* Hover gradient accent */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
