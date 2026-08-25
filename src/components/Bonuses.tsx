import { bonuses } from '../data/content'
import { Sparkles, ArrowRight } from '../data/icons'

export default function Bonuses() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      </div>

      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <Sparkles className="h-4 w-4" />
            Bônus exclusivos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            4 Bônus Inclusos, Totalmente Grátis
          </h2>
          <p className="mt-4 text-lg text-neutral-300">
            Para tornar sua jornada ainda mais prática, você recebe esses
            materiais adicionais junto com o desafio.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b, i) => (
            <article
              key={b.title}
              className="reveal group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]"
              data-reveal-delay={String(i * 90)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                <b.icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                Bônus {i + 1}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-white">
                {b.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-300">
                {b.description}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a href="#preco" className="btn-primary-lg">
            Quero Receber Os Bônus
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-3 text-sm text-neutral-400">
            Bônus inclusos gratuitamente na compra do desafio.
          </p>
        </div>
      </div>
    </section>
  )
}
