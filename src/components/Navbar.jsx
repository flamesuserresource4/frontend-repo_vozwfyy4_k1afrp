import { motion } from 'framer-motion';

function Brand() {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Stylized W logo */}
      <motion.div
        className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-white via-slate-200 to-slate-400 shadow-lg shadow-slate-900/20"
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        aria-hidden
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="wtex-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M10 20 L30 80 L50 35 L70 80 L90 20"
            fill="none"
            stroke="url(#wtex-grad)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
      <div className="leading-tight">
        <span className="block text-xs tracking-widest text-slate-300">WHITE</span>
        <span className="block text-xl font-semibold text-white">TEX</span>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const items = [
    { label: 'Home', href: '#' },
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-5 py-3">
            <Brand />
            <ul className="hidden gap-6 md:flex">
              {items.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10"
            >
              Shop Now
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
}
