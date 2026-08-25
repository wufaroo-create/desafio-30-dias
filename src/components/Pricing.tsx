import { Check, Lock, ArrowRight, Zap, BookOpen } from '../data/icons'
import { PURCHASE_URL } from '../data/config'

const perks = ['Pagamento Seguro', 'Acesso Imediato', 'Ebook Digital']

const included = [
  'Ebook Premium (30 Dias)',
  'Cardápio Básico',
  'Planner Alimentar',
  'Checklist Diário',
  'Calendário do Desafio',
  'Rastreador de Hábitos',
  'Diário de Progresso',
  '4 Bônus exclusivos',
]

export default function Pricing() {
  return (
    <section id="preco" className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Investimento</span>
          <h2 className="section-title mt-4">
            Comece Hoje Por Menos Do Que Você Imagina
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Acesso vitalício a todo o material, com pagamento único e seguro.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-lg" data-reveal-delay="120">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-lift ring-1 ring-brand-100 sm:p-10">
            {/* Highlight ribbon */}
            <div className="absolute right-6 top-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-soft">
                <Zap className="h-3.5 w-3.5" />
                Oferta especial
              </span>
            </div>

            <div className="flex items-center gap-2 text-brand-600">
              <BookOpen className="h-6 w-6" />
              <span className="font-display text-sm font-bold uppercase tracking-wider">
                Desafio 30 Dias
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-neutral-500">De</p>
              <p className="mt-1 text-xl font-medium text-neutral-400 line-through">
                R$297,00
              </p>
              <p className="mt-3 text-sm font-medium text-neutral-500">
                Por apenas
              </p>
              <div className="mt-1 flex items-end gap-1">
                <span className="font-display text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
                  R$229
                </span>
                <span className="mb-1.5 font-display text-2xl font-bold text-neutral-900">
                  ,90
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-500">
                Pagamento único · Acesso vitalício
              </p>
            </div>

            <ul className="mt-7 grid gap-2.5 border-t border-neutral-100 pt-6">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium text-neutral-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a href={PURCHASE_URL} className="btn-primary-lg mt-8 w-full">
              QUERO COMEÇAR AGORA
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {perks.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500"
                >
                  <Lock className="h-3.5 w-3.5 text-brand-500" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
