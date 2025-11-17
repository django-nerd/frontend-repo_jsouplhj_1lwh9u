import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import About from './components/About'
import Terms from './components/Terms'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Global background */}
      <div className="fixed inset-0 -z-0 bg-[#051C2C]" />
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_circle_at_0%_0%,rgba(0,229,217,0.08),transparent_60%),radial-gradient(900px_circle_at_100%_100%,rgba(0,229,217,0.06),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Terms />

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Aegis Anti‑Cheat. All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/60">
            <a href="#tos" className="hover:text-white transition">Terms</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
