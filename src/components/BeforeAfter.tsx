import { X, Check } from '../data/icons'

const before = [
  'Alimentação desorganizada',
  'Falta de rotina',
  'Pouca energia',
  'Dificuldade para manter consistência',
]

const after = [
  'Alimentação mais equilibrada',
  'Rotina organizada',
  'Mais disposição',
  'Hábitos sustentáveis',
]

export default function BeforeAfter() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Antes e depois</span>
          <h2 className="section-title mt-4">
            Antes & Depois do Estilo de Vida
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Uma mudança de rotina, não uma transformação drástica. Veja como
            pequenos ajustes se refletem no seu dia a dia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Before */}
          <div className="reveal card p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <X className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-neutral-900">
                Antes
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-neutral-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="reveal card relative overflow-hidden border-brand-100 bg-gradient-to-br from-white to-brand-50/50 p-8"
            data-reveal-delay="120"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-100/50 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  Depois
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="reveal mt-8 text-center text-xs text-neutral-400">
          Ilustração de rotina e estilo de vida. O desafio não promete perda de
          peso específica ou garantida — os resultados variam de pessoa para pessoa.
        </p>
      </div>
    </section>
  )
}
