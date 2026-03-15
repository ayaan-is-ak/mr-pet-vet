import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-sage-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-sage-500 to-sage-700 flex items-center justify-center shadow-lg shadow-sage-500/30 group-hover:shadow-sage-500/50 transition-shadow duration-300">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-base md:text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-charcoal-800' : 'text-white'}`}>
                Mr. Pet & Vet
              </span>
              <span className={`text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-sage-600' : 'text-sage-200'}`}>
                Veterinary Hospital
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-sage-100/80 ${
                  scrolled ? 'text-charcoal-700 hover:text-sage-700' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:03098808305"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-sage-500/30 hover:shadow-sage-500/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiPhone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-charcoal-800' : 'text-white'}`}
            >
              {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-sage-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-charcoal-700 hover:bg-sage-50 hover:text-sage-700 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:03098808305"
                className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-sage-500 to-sage-600 text-white px-5 py-3 rounded-xl font-semibold"
              >
                <FiPhone className="w-4 h-4" />
                Call Now: 0309-8808305
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
