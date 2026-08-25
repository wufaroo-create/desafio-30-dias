import { audience } from '../data/content'

export default function WhoFor() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Para quem é</span>
            <h2 className="section-title mt-4">
              Este Desafio É Para Quem Quer Mudar de Verdade
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Ele foi desenhado para pessoas reais, com rotinas reais, que buscam
              uma relação mais saudável e duradoura com o próprio corpo.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/8038627/pexels-photo-8038627.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Mulher sorrindo ao ar livre em um dia nublado, demonstrando bem-estar"
                loading="lazy"
                className="h-72 w-full object-cover sm:h-80"
              />
            </div>
          </div>

          <ul className="reveal grid gap-4 sm:grid-cols-2" data-reveal-delay="120">
            {audience.map((a) => (
              <li
                key={a.text}
                className="card flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <a.icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-neutral-800">{a.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
