import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiHeart } from 'react-icons/fi';

const highlights = [
  {
    icon: FiShield,
    title: 'Expert Surgical Care',
    description: 'Specialized experience in complex spays and neuters with a track record of zero-complication recoveries.',
  },
  {
    icon: FiUsers,
    title: 'Concierge Post-Op Support',
    description: 'Dr. Sheraz provides personal follow-ups via WhatsApp and call to ensure every patient heals perfectly.',
  },
  {
    icon: FiHeart,
    title: 'Multi-Pet Household Experts',
    description: 'We manage households with 10+ cats with ease, offering organized, clean, and stress-free environments.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-3">About Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal-800 mb-6">
              The <span className="gradient-text">Mr. Pet & Vet</span> Difference
            </h2>
            <p className="text-charcoal-500 text-lg leading-relaxed mb-8">
              Located in the heart of Jinnah Garden, Islamabad, Mr. Pet & Vet Veterinary Hospital is a premier 24-hour 
              medical facility dedicated to the health and happiness of your animal companions. Led by the highly regarded 
              Dr. Sheraz, our clinic has built a reputation for excellence in surgical procedures and comprehensive 
              long-term preventative care.
            </p>

            <div className="space-y-6">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-charcoal-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Dr. Sheraz Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-sage-200/30 border border-sage-100/50">
              {/* Decorative top accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sage-400 to-sage-600 rounded-t-3xl" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-sage-500/20">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-800">Dr. Sheraz</h3>
                  <p className="text-sage-600 text-sm font-medium">Lead Veterinary Surgeon</p>
                </div>
              </div>

              <p className="text-charcoal-500 leading-relaxed mb-6">
                With a passion for animal welfare and years of specialized training, Dr. Sheraz leads every 
                surgery and critical case with precision and compassion. His personal approach to post-operative 
                care has earned the trust of thousands of pet families across Islamabad.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '10+', label: 'Years Exp.' },
                  { value: '5K+', label: 'Surgeries' },
                  { value: '100%', label: 'Success' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-sage-50 rounded-xl py-3 px-2">
                    <div className="text-lg font-bold text-sage-700">{stat.value}</div>
                    <div className="text-xs text-charcoal-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* 24/7 Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-sage-500 to-sage-700 text-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-sage-500/30 rotate-6">
                <span className="text-xl font-bold leading-none">24/7</span>
                <span className="text-[10px] opacity-80">OPEN</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
