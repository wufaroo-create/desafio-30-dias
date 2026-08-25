import { Leaf } from '../data/icons'

const legal = [
  { href: '#', label: 'Política de Privacidade' },
  { href: '#', label: 'Termos de Uso' },
  { href: '#', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-12">
      <div className="container-px">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-neutral-900">
                Desafio 30 Dias Para Emagrecer
              </p>
              <p className="text-xs text-neutral-500">
                Hábitos saudáveis com consistência
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-100 pt-6">
          <p className="text-center text-xs text-neutral-400 md:text-left">
            © {new Date().getFullYear()} Desafio 30 Dias Para Emagrecer. Todos os
            direitos reservados.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-neutral-400 md:mx-0 md:text-left">
            Este produto é um material digital de apoio à construção de hábitos
            saudáveis e não substitui acompanhamento profissional individualizado.
            Resultados variam conforme esforço, perfil e condições de cada pessoa.
          </p>
        </div>
      </div>
    </footer>
  )
}
