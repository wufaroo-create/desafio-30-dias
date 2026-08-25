import { benefits } from '../data/content'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">O que você vai aprender</span>
          <h2 className="section-title mt-4">
            O Que Você Vai Aprender
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Um conteúdo completo e prático para você transformar sua rotina com
            consciência, equilíbrio e constância.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="reveal card group p-6 hover:-translate-y-1 hover:shadow-lift"
              data-reveal-delay={String((i % 4) * 80)}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-neutral-900">
                {b.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
