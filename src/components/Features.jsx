import { ShieldCheck, Zap, Activity, CloudLightning, BadgeCheck } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Real‑Time Defense', desc: 'Continuous scanning, signature + heuristic detection, instant quarantine.' },
  { icon: Activity, title: 'Behavioral Heuristics', desc: 'Adaptive models flag abnormal patterns across sessions to block emerging threats.' },
  { icon: Zap, title: 'Ultra‑Low Overhead', desc: 'Native hooks and selective sampling keep player performance buttery‑smooth.' },
  { icon: CloudLightning, title: 'Cloud Rules', desc: 'Auto‑updates bring the latest rules without server restarts or downtime.' },
  { icon: BadgeCheck, title: 'Trusted by Admins', desc: 'Detailed logs, evidence packs and Discord webhooks for transparent actions.' },
]

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_20%,rgba(0,229,217,0.08),transparent_60%),radial-gradient(600px_circle_at_80%_50%,rgba(0,229,217,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00E5D9]/10 blur-3xl rounded-full" />
              <Icon className="w-8 h-8 text-[#00E5D9] drop-shadow-[0_0_20px_rgba(0,229,217,0.6)]" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
