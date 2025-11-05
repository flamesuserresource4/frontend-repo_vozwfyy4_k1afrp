import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <motion.div
          className="absolute left-1/2 top-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[conic-gradient(at_top_left,_white,_45%,_#94a3b8,_70%,_#0ea5e9,_white)] blur-3xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[-10rem] right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_#ffffff,_#cbd5e1_40%,_transparent_70%)] blur-2xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 py-24 md:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
            >
              White Tex
              <span className="block bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">Fine Fabrics, Infinite Possibilities</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-lg leading-8 text-slate-300"
            >
              Discover luxury weaves and everyday essentials crafted with care. From silky smooth to breezy light, find a fabric that feels like you.
            </motion.p>
            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="#collections"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl shadow-slate-900/10"
              >
                Browse Collections
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 hover:bg-white/10"
              >
                Learn More
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              {[
                { k: '20+', v: 'Collections' },
                { k: '1000+', v: 'Satisfied Clients' },
                { k: '1999', v: 'Founded' },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90"
                >
                  <div className="text-2xl font-bold">{s.k}</div>
                  <div className="text-xs tracking-wider text-slate-300">{s.v}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/20 via-sky-200/10 to-slate-800/40 shadow-2xl"
            >
              {/* Flowing ribbons */}
              {[...Array(6)].map((_, i) => (
                <motion.span
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="absolute left-[-20%] h-1/3 w-[140%] rounded-full opacity-50 blur-xl"
                  style={{
                    top: `${10 + i * 12}%`,
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(90deg, rgba(255,255,255,0.9), rgba(148,163,184,0.35))'
                        : 'linear-gradient(90deg, rgba(14,165,233,0.7), rgba(255,255,255,0.25))',
                  }}
                  animate={{ x: ['0%', '-10%', '0%'] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                />
              ))}
              {/* Framed label */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur">
                <div className="text-sm tracking-wide text-slate-200">Signature Weave</div>
                <div className="text-xl font-semibold">The White Tex Touch</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
