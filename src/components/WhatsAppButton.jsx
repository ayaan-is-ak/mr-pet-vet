import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative bg-white rounded-2xl shadow-2xl shadow-charcoal-900/10 p-4 max-w-[240px] border border-sage-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal-100 hover:bg-charcoal-200 rounded-full flex items-center justify-center transition-colors"
            >
              <FiX className="w-3 h-3 text-charcoal-600" />
            </button>
            <p className="text-sm text-charcoal-700 font-medium mb-1">Need help? 💬</p>
            <p className="text-xs text-charcoal-500">Chat with Dr. Sheraz on WhatsApp for instant support!</p>
            {/* Tooltip Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-sage-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/9203098808305?text=Hi%20Dr.%20Sheraz%2C%20I%20need%20veterinary%20assistance."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5C] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 whatsapp-pulse"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.a>
    </div>
  );
}
