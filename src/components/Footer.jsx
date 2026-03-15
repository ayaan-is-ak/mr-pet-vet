import { FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Spaying & Neutering',
  'Vaccinations',
  'Emergency Care',
  'Post-Op Consultation',
  'Health Checkups',
  'Pet Grooming',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-sage-400 via-sage-500 to-sage-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage-500 to-sage-700 flex items-center justify-center shadow-lg shadow-sage-500/20">
                <span className="text-white text-lg">🐾</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg leading-tight">Mr. Pet & Vet</div>
                <div className="text-sage-400 text-xs tracking-widest uppercase">Veterinary Hospital</div>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Islamabad's premier 24/7 veterinary hospital. Compassionate care, clinical excellence.
            </p>
            <div className="flex items-center gap-2 text-sm text-charcoal-400">
              <FiMapPin className="w-4 h-4 text-sage-500" />
              Jinnah Garden, Block A, Islamabad
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sage-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-charcoal-400 hover:text-sage-300 transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sage-400 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-charcoal-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-sage-400 mb-5">Emergency?</h4>
            <p className="text-charcoal-400 text-sm mb-4">
              We're available round the clock. Don't hesitate — call us immediately for any pet emergency.
            </p>
            <a
              href="tel:03098808305"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-sage-500/20 hover:shadow-sage-500/40 transition-all duration-300"
            >
              <FiPhone className="w-4 h-4" />
              0309-8808305
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-sm">
            © {currentYear} Mr. Pet & Vet Veterinary Hospital. All rights reserved.
          </p>
          <p className="text-charcoal-600 text-sm flex items-center gap-1">
            Made with <FiHeart className="w-3 h-3 text-rose-500" /> for the pets of Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
}
