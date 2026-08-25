import { ArrowRight, Check } from '../data/icons'
import { PURCHASE_URL } from '../data/config'

const perks = ['Acesso Imediato', 'Ebook Premium', 'Compatível com Celular']

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
      </div>

      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]">
            O Melhor Momento Para Começar a Cuidar da Sua Saúde É Hoje.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-50/90">
            Dê o primeiro passo para construir hábitos saudáveis que podem
            acompanhar você por muitos anos.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={PURCHASE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-lg font-bold text-brand-600 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
            {perks.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-50"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
