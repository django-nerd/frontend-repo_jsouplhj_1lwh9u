export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_circle_at_10%_10%,rgba(0,229,217,0.06),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">About Aegis</h2>
          <p className="mt-4 text-white/70">
            Aegis is a modern FiveM anti‑cheat built by server owners who care about fair play. We blend signature detection with adaptive heuristics to stop both known and novel threats in real‑time. With cloud‑served rules, evidence packs, and transparent auditing, you stay ahead without adding friction to your players.
          </p>
        </div>
      </div>
    </section>
  )
}
