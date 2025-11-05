import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-white selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-xl backdrop-blur">
              <h3 className="text-2xl font-bold text-white">Crafted With Care</h3>
              <p className="mt-3 text-slate-300">
                At White Tex, every roll is a promise of quality. We partner with trusted mills and employ meticulous testing to ensure the hand-feel, weight, and durability you expect.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-xl backdrop-blur">
              <h3 className="text-2xl font-bold text-white">For Makers & Brands</h3>
              <p className="mt-3 text-slate-300">
                Whether you are designing a capsule collection or sewing at home, our curated assortment spans essentials to elevated statements—ready to inspire your next piece.
              </p>
            </div>
          </div>
        </section>
        <Collections />
      </main>
      <Footer />
    </div>
  );
}
