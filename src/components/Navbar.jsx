import { useState, useEffect } from 'react'
import { Menu, ShieldCheck, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Terms', href: '#tos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-[0_8px_32px_rgba(0,229,217,0.08)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <ShieldCheck className="w-7 h-7 text-[#00E5D9] drop-shadow-[0_0_18px_rgba(0,229,217,0.6)]" />
            <span className="absolute inset-0 blur-lg rounded-full bg-[#00E5D9]/30 -z-10" />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">Aegis Anti-Cheat</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="relative inline-flex items-center px-4 py-2 rounded-xl text-slate-900 font-semibold bg-[#00E5D9] shadow-[0_10px_30px_rgba(0,229,217,0.35)] hover:shadow-[0_14px_40px_rgba(0,229,217,0.55)] transition-all active:translate-y-[1px]">
            Get Started
            <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 to-transparent opacity-70" />
          </a>
        </div>

        <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white/10 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#00E5D9]" />
                <span className="text-white font-semibold">Aegis</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-10 h-10 grid place-items-center rounded-lg border border-white/10 text-white/80">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-lg">
                  {l.label}
                </a>
              ))}
              <a href="#pricing" onClick={() => setOpen(false)} className="mt-4 relative inline-flex items-center justify-center px-4 py-3 rounded-xl text-slate-900 font-semibold bg-[#00E5D9] shadow-[0_10px_30px_rgba(0,229,217,0.35)]">
                Get Started
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/30 to-transparent opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
