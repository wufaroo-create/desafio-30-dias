import { includedItems } from '../data/content'
import { Check } from '../data/icons'

const collage = [
  {
    src: 'https://images.pexels.com/photos/5237899/pexels-photo-5237899.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mulher preparando vegetais frescos em uma cozinha moderna',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/2311854/pexels-photo-2311854.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Copo de água com frutas vermelhas, simbolizando hidratação',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5717450/pexels-photo-5717450.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Cadernos e caneta organizados para planejamento',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8805471/pexels-photo-8805471.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Mulher escolhendo frutas e legumes frescos no mercado',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/11616422/pexels-photo-11616422.jpeg?auto=compress&cs=tinysrgb&w=400',
    alt: 'Pessoa escrevendo em um caderno para registrar hábitos',
    span: '',
  },
]

export default function Included() {
  return (
    <section id="incluso" className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Collage */}
          <div className="reveal relative order-last lg:order-first">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {collage.map((img, i) => (
                <div
                  key={img.src}
                  className={`overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5 ${
                    img.span
                  } ${i === 0 ? 'aspect-square lg:aspect-auto' : 'aspect-square'}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100/40 to-transparent" />
          </div>

          {/* List */}
          <div className="reveal" data-reveal-delay="120">
            <span className="eyebrow">Tudo que está incluso</span>
            <h2 className="section-title mt-4">
              Um kit completo para os seus 30 dias
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Cada item foi pensado para facilitar o seu dia a dia e manter você
              organizado do início ao fim do desafio.
            </p>

            <ul className="mt-8 space-y-3">
              {includedItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-neutral-100 transition-shadow hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-base font-bold text-neutral-900">
                        {item.title}
                      </h3>
                      <Check className="h-4 w-4 shrink-0 text-brand-500" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
