import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    period: '/mo',
    features: ['Core detections', 'Evidence logs', 'Basic webhooks', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    features: ['Everything in Starter', 'Behavioral heuristics', 'Advanced webhooks', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Dedicated ruleset', 'SLA + onboarding', 'Security reviews', 'Custom integrations'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_50%_0%,rgba(0,229,217,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Scale from small communities to large networks with confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`relative p-6 rounded-3xl border ${t.highlighted ? 'border-[#00E5D9]/60 bg-[#051C2C]/60' : 'border-white/10 bg-white/5'} backdrop-blur-2xl`}>
              {t.highlighted && (
                <span className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#00E5D9]/30 to-transparent blur-xl" />
              )}
              <div className="relative">
                <h3 className="text-white text-xl font-semibold">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{t.price}</span>
                  <span className="text-white/60">{t.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/80">
                      <span className="inline-flex w-6 h-6 rounded-full bg-[#00E5D9]/20 text-[#051C2C] items-center justify-center">
                        <Check className="w-4 h-4 text-[#00E5D9]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#buy" className="mt-8 inline-flex w-full items-center justify-center px-4 py-3 rounded-2xl font-semibold text-slate-900 bg-[#00E5D9] shadow-[0_20px_80px_rgba(0,229,217,0.45)] hover:shadow-[0_24px_100px_rgba(0,229,217,0.7)] transition-all">
                  Choose {t.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
