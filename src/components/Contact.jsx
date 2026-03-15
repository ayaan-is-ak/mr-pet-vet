import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Visit Us',
    lines: ['A-3 Plaza, Jinnah Garden', 'Block A, Islamabad, Pakistan'],
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    lines: ['0309-8808305', 'Available 24 hours'],
    href: 'tel:03098808305',
  },
  {
    icon: FiClock,
    title: 'Working Hours',
    lines: ['Open 24/7', 'Including weekends & holidays'],
  },
  {
    icon: FiMail,
    title: 'WhatsApp',
    lines: ['Chat with Dr. Sheraz', 'Instant appointment booking'],
    href: 'https://wa.me/9203098808305',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-3">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal-800 mb-4">
            We're Always{' '}
            <span className="gradient-text">Here For You</span>
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Whether it's an emergency or a routine checkup, reach us anytime — we never close.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? 'a' : 'div';
              const wrapperProps = item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
              return (
                <Wrapper
                  key={item.title}
                  {...wrapperProps}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-sage-100/50 hover:shadow-md hover:border-sage-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-sage-50 group-hover:bg-sage-100 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-800 mb-1">{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-charcoal-500">{line}</p>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl shadow-sage-200/30 border border-sage-100/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.5!2d73.1698312!3d33.5641645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df953686e982ad%3A0xac1744fce56a9ec7!2sMR.%20VET%20%26%20PET%20VETERINARY%20HOSPITAL!5e0!3m2!1sen!2s!4v1709890000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mr. Pet & Vet Veterinary Hospital Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
