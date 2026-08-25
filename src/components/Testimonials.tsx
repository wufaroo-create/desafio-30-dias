import { testimonials } from '../data/content'
import { Star, Quote } from '../data/icons'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Depoimentos</span>
          <h2 className="section-title mt-4">
            Quem Já Começou Compartilha a Experiência
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Relatos de pessoas reais sobre como o desafio ajudou a organizar a
            rotina e melhorar a relação com a alimentação.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured large testimonial */}
          <article className="reveal card relative flex flex-col justify-between bg-gradient-to-br from-brand-50/70 to-white p-8 lg:row-span-2">
            <div>
              <Quote className="h-9 w-9 text-brand-300" />
              <p className="mt-4 font-display text-xl font-medium leading-relaxed text-neutral-800">
                {testimonials[0].quote}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={testimonials[0].photo}
                alt={testimonials[0].name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
              />
              <div>
                <p className="font-display font-bold text-neutral-900">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-neutral-500">{testimonials[0].role}</p>
              </div>
            </div>
          </article>

          {testimonials.slice(1).map((t, i) => (
            <article
              key={t.name}
              className="reveal card flex flex-col p-6 hover:-translate-y-1 hover:shadow-lift"
              data-reveal-delay={String((i % 2) * 90)}
            >
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100"
                />
                <div>
                  <p className="text-sm font-bold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-neutral-400">
          Depoimentos ilustrativos. As experiências são individuais e os
          resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
