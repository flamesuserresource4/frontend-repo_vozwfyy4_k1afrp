import { motion } from 'framer-motion';
import { ShoppingBag, Star, Scissors, Palette, Leaf } from 'lucide-react';

const fabrics = [
  {
    name: 'Cotton Classics',
    desc: 'Breathable comfort for everyday wear and home.',
    accent: 'from-white/80 via-sky-200/50 to-slate-200/60',
    icon: Leaf,
  },
  {
    name: 'Silk Elegance',
    desc: 'Lustrous drape and luxurious touch.',
    accent: 'from-white/80 via-pink-200/50 to-slate-200/60',
    icon: Star,
  },
  {
    name: 'Linen Breeze',
    desc: 'Airy texture, effortlessly refined.',
    accent: 'from-white/80 via-emerald-200/50 to-slate-200/60',
    icon: Scissors,
  },
  {
    name: 'Wool Heritage',
    desc: 'Warmth with timeless character.',
    accent: 'from-white/80 via-amber-200/50 to-slate-200/60',
    icon: Palette,
  },
  {
    name: 'Denim Studio',
    desc: 'Durable twills for modern makers.',
    accent: 'from-white/80 via-blue-200/50 to-slate-200/60',
    icon: ShoppingBag,
  },
  {
    name: 'Satin Glow',
    desc: 'Smooth sheen for statement pieces.',
    accent: 'from-white/80 via-violet-200/50 to-slate-200/60',
    icon: Star,
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-white md:text-4xl"
            >
              Our Fabric Collections
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-2 text-slate-300"
            >
              Carefully sourced and thoughtfully curated for quality and feel.
            </motion.p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fabrics.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur"
            >
              <div
                className={`pointer-events-none absolute -left-1/3 -top-1/3 h-64 w-64 rounded-full bg-gradient-to-br ${f.accent} opacity-40 blur-2xl`}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                      <f.icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold">{f.name}</h3>
                  </div>
                  <Star className="h-5 w-5 text-yellow-300 opacity-80" />
                </div>
                <p className="mt-3 text-sm text-slate-200/90">{f.desc}</p>

                <div className="mt-6 flex items-center gap-3">
                  {['Soft', 'Durable', 'Premium'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-slate-900 shadow-slate-900/10"
                >
                  View fabrics
                  <ShoppingBag className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Hover sheen */}
              <motion.span
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 30%, transparent 60%)',
                }}
                whileHover={{ opacity: 1, x: ["-60%", "20%", "120%"] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
