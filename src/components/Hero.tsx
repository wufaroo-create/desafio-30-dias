import { Check, ArrowRight, Star } from '../data/icons'
import { PURCHASE_URL } from '../data/config'

const heroImg =
  'https://images.pexels.com/photos/23484037/pexels-photo-23484037.jpeg?auto=compress&cs=tinysrgb&w=1100'
const heroImgLarge =
  'https://images.pexels.com/photos/23484037/pexels-photo-23484037.jpeg?auto=compress&cs=tinysrgb&w=1400'

const perks = [
  'Acesso Imediato',
  'Ebook Premium',
  'Compatível com Celular',
  'Atualizações Gratuitas',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            Desafio 30 Dias · Saúde & Bem-estar
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.4rem]">
            Emagreça Com Mais{' '}
            <span className="relative whitespace-nowrap text-brand-600">
              Saúde
              <svg
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-300"
                viewBox="0 0 200 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7c40-5 120-5 196 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            em Apenas 30 Dias
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Crie hábitos saudáveis, organize sua alimentação e desenvolva uma
            rotina sustentável para perder peso com consistência.
          </p>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href={PURCHASE_URL} className="btn-primary-lg w-full sm:w-auto">
              QUERO COMEÇAR AGORA
              <ArrowRight className="h-5 w-5" />
            </a>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-neutral-500">
                Mais de 2.000 pessoas
              </span>
            </div>
          </div>

          <ul className="mt-8 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-neutral-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="reveal relative" data-reveal-delay="120">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[2rem] bg-brand-500/10" />
            <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-black/5">
              <img
                src={heroImg}
                srcSet={`${heroImg} 1100w, ${heroImgLarge} 1400w`}
                sizes="(max-width: 1024px) 440px, 560px"
                alt="Mulher caminhando com confiança em um parque arborizado em um dia ensolarado"
                className="h-[440px] w-full object-cover sm:h-[520px] lg:h-[600px]"
                loading="eager"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-3 bottom-8 hidden rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur sm:block lg:-left-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                30 dias
              </p>
              <p className="mt-0.5 font-display text-lg font-bold text-neutral-900">
                Hábitos que ficam
              </p>
            </div>

            <div className="absolute -right-2 top-8 hidden rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur sm:block lg:-right-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-neutral-900">
                    Acesso vitalício
                  </p>
                  <p className="text-xs text-neutral-500">no seu ritmo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
