import { reasons } from '../data/content'
import { Leaf } from '../data/icons'

export default function WhyItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Por que funciona</span>
          <h2 className="section-title mt-4">
            Por Que Este Desafio Funciona
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Não é sobre uma solução rápida — é sobre construir, passo a passo,
            hábitos que permanecem muito além dos 30 dias.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className="reveal card relative overflow-hidden p-7 hover:-translate-y-1 hover:shadow-lift"
              data-reveal-delay={String(i * 90)}
            >
              <span className="absolute -right-2 -top-3 font-display text-7xl font-extrabold text-brand-50">
                {i + 1}
              </span>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  {r.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 flex items-center justify-center gap-3 rounded-2xl bg-brand-50 px-6 py-4 text-center">
          <Leaf className="h-5 w-5 shrink-0 text-brand-600" />
          <p className="text-sm font-medium text-brand-800">
            Foco em construção de hábitos — não em promessas de resultados rápidos.
          </p>
        </div>
      </div>
    </section>
  )
}
