import { ShieldCheck } from '../data/icons'

export default function Guarantee() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50/60 to-white p-8 text-center shadow-soft sm:p-12">
          {/* Badge */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 text-white shadow-lift ring-8 ring-brand-50">
            <ShieldCheck className="h-10 w-10" />
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Compra Protegida Pela Plataforma
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
            Sua compra é processada por uma plataforma de vendas segura e fica
            protegida pela política de reembolso da própria plataforma, nos termos
            em que ela se aplica. Recomendamos que você consulte as condições
            específicas no momento da compra para conhecer os prazos e critérios.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-neutral-700">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              Pagamento seguro
            </span>
            <span className="hidden h-4 w-px bg-neutral-200 sm:block" />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              Compra pela plataforma oficial
            </span>
            <span className="hidden h-4 w-px bg-neutral-200 sm:block" />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-600" />
              Suporte ao cliente
            </span>
          </div>

          <p className="mt-6 text-xs text-neutral-400">
            Não prometemos garantias além das oferecidas pela plataforma de
            vendas utilizada.
          </p>
        </div>
      </div>
    </section>
  )
}
