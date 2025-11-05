import { motion } from 'framer-motion';

export default function Footer() {
  const links = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-10 mx-auto h-24 w-72 rotate-12 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left"
        >
          <div>
            <div className="text-xs tracking-widest text-slate-300">WHITE TEX</div>
            <div className="text-2xl font-semibold text-white">Fine fabrics since 1999</div>
          </div>
          <div className="flex items-center gap-5">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-slate-300 hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
        <div className="mt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} White Tex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
