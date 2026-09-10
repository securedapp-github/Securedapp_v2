import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface FloatingAuditButtonProps {
  theme?: 'dark' | 'light';
  onClick: () => void;
}

export const FloatingAuditButton: React.FC<FloatingAuditButtonProps> = ({
  theme = 'dark',
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-5 right-5 z-40 pointer-events-auto"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full border shadow-lg transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-emerald-500 border-emerald-400 text-white shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:bg-emerald-600'
            : 'bg-[#10b981] border-emerald-400/80 text-white shadow-[0_4px_18px_rgba(16,185,129,0.45)] hover:bg-[#059669]'
        }`}
        aria-label="Audit Website Free"
        title="Audit Website"
      >
        {/* Shield Icon */}
        <ShieldCheck className="w-5 h-5 fill-current" />

        {/* Small Live Online Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>
      </motion.button>
    </motion.div>
  );
};
