import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#051C2C]" />

      {/* Gradient accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-[#00E5D9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#00E5D9]/10 blur-[120px]" />

      {/* Spline Scene */}
      <div className="relative z-10 h-[60vh] md:h-[70vh]">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_10px_60px_rgba(0,229,217,0.15)]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Next‑Gen FiveM Anti‑Cheat
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl">
            Shield your server with real‑time detection, dynamic heuristics and instant mitigation. Built for performance, designed for peace of mind.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="relative inline-flex items-center justify-center px-6 py-4 rounded-2xl font-semibold text-slate-900 bg-[#00E5D9] shadow-[0_20px_80px_rgba(0,229,217,0.45)] hover:shadow-[0_24px_100px_rgba(0,229,217,0.7)] transition-all duration-300">
              <span className="relative z-10">Get Aegis</span>
              <span className="absolute inset-0 rounded-2xl bg-white/40 opacity-60" />
              <span className="absolute -inset-1 rounded-2xl blur-2xl bg-[#00E5D9]/70" />
            </a>
            <a href="#about" className="px-6 py-4 rounded-2xl font-semibold text-white/90 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
