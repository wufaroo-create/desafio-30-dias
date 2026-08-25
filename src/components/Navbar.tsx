import { useEffect, useState } from 'react'
import { Leaf, ArrowRight } from '../data/icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#incluso', label: 'O Que Inclui' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'Dúvidas' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-18">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-[15px] font-bold leading-tight tracking-tight text-neutral-900 sm:text-base">
            Desafio 30 Dias
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#preco" className="hidden md:inline-flex">
          <span className="btn-primary !px-5 !py-2.5 !text-sm">
            Quero Começar
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-5 py-4 shadow-card md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#preco"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Quero Começar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
