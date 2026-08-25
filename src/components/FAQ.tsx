import { useState } from 'react'
import { faqs } from '../data/content'
import { ChevronDown } from '../data/icons'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-neutral-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Dúvidas frequentes</span>
          <h2 className="section-title mt-4">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Reunimos as principais dúvidas para você comprar com segurança e
            tranquilidade.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.question}
                className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-50/40"
                >
                  <span className="font-display text-base font-bold text-neutral-900">
                    {f.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-500 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-neutral-600">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
