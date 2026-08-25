type IconProps = { className?: string }

const base = (className?: string) =>
  ['h-6 w-6', className].filter(Boolean).join(' ')

const svg = (path: React.ReactNode, className?: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={base(className)}
    aria-hidden="true"
  >
    {path}
  </svg>
)

export const Salad = (p: IconProps) =>
  svg(
    <>
      <path d="M5 11h14a0 0 0 0 1 0 0 7 7 0 0 1-7 7H12a7 7 0 0 1-7-7Z" />
      <path d="M12 11c0-3 1.5-5 4-5.5C15.5 8 16 9.5 17 11" />
      <path d="M12 11c0-2.5-1.5-4.5-4-5C9 8 8.5 9.5 7.5 11" />
      <path d="M20 11c1.5 0 2.5 1 2.5 2.5S21 16 19.5 16" />
      <path d="M8 19c-1 .5-2 1.5-2 3" />
      <path d="M16 19c1 .5 2 1.5 2 3" />
    </>,
    p.className,
  )

export const Footprints = (p: IconProps) =>
  svg(
    <>
      <path d="M5 11c0-2 .5-3.5 1.5-3.5S8 9 8 11c0 1.2.5 1.8 1.5 1.8S11 11.5 11 10c0-2.5-1-4-2.5-4-2 0-3.5 2-3.5 5Z" />
      <path d="M4 14.5c0-1.5 1-2.5 2.5-2.5S9 13 9 14.5c0 2-1.5 5.5-4 5.5-1 0-1.5-.8-1.5-2 0-1 .5-2 .5-3.5Z" />
      <path d="M17 6.5c0-1.5.5-2.5 1.5-2.5S20 5 20 6.5c0 1 .4 1.5 1.2 1.5S22.5 6.8 22.5 5.5c0-2-1-3.2-2-3.2-1.7 0-2.8 1.7-2.8 4.2Z" />
      <path d="M16 9.5c0-1.2.8-2 2-2s2.2 1 2.2 2.3c0 1.7-1.2 4.5-3.2 4.5-.8 0-1.2-.7-1.2-1.7 0-.8.4-1.7.4-2.8Z" />
    </>,
    p.className,
  )

export const Droplets = (p: IconProps) =>
  svg(
    <>
      <path d="M12 2.5c3 4 5.5 7 5.5 10a5.5 5.5 0 0 1-11 0c0-3 2.5-6 5.5-10Z" />
      <path d="M12 18.5a3 3 0 0 1-3-3" />
    </>,
    p.className,
  )

export const ShoppingCart = (p: IconProps) =>
  svg(
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
    </>,
    p.className,
  )

export const UtensilsCrossed = (p: IconProps) =>
  svg(
    <>
      <path d="M16 2v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2V2" />
      <path d="M12 2v6" />
      <path d="m17.5 16.5 3.6 3.6" />
      <path d="M3 21l5.5-5.5" />
      <path d="m8.5 15.5 4-4" />
      <path d="m14.5 9.5 6.5-6.5" />
      <path d="M19 3l-2 2" />
    </>,
    p.className,
  )

export const TrendingUp = (p: IconProps) =>
  svg(
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </>,
    p.className,
  )

export const Moon = (p: IconProps) =>
  svg(<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />, p.className)

export const Brain = (p: IconProps) =>
  svg(
    <>
      <path d="M9.5 4a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9c0 1 .5 1.8 1.3 2.3A2.6 2.6 0 0 0 5 13.5 2.5 2.5 0 0 0 7.5 16 2.5 2.5 0 0 0 9.5 20a2.5 2.5 0 0 0 2.5-2.5V6.5A2.5 2.5 0 0 0 9.5 4Z" />
      <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5 2.5 2.5 0 0 1 19 9c0 1-.5 1.8-1.3 2.3A2.6 2.6 0 0 1 19 13.5 2.5 2.5 0 0 1 16.5 16 2.5 2.5 0 0 1 14.5 20a2.5 2.5 0 0 1-2.5-2.5V6.5A2.5 2.5 0 0 1 14.5 4Z" />
    </>,
    p.className,
  )

export const BookOpen = (p: IconProps) =>
  svg(
    <>
      <path d="M12 6.5C10.5 5 8 4 5 4v14c3 0 5.5 1 7 2.5" />
      <path d="M12 6.5C13.5 5 16 4 19 4v14c-3 0-5.5 1-7 2.5" />
      <path d="M12 6.5v14" />
    </>,
    p.className,
  )

export const ClipboardList = (p: IconProps) =>
  svg(
    <>
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
      <path d="M9 12h.01M9 16h.01M12 12h4M12 16h4" />
    </>,
    p.className,
  )

export const NotebookPen = (p: IconProps) =>
  svg(
    <>
      <path d="M4 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M8 2v20" />
      <path d="m14.5 7.5 1.5 1.5-4 4-2 .5.5-2 4-4Z" />
    </>,
    p.className,
  )

export const CalendarCheck = (p: IconProps) =>
  svg(
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3" />
      <path d="m9 14 2 2 4-4" />
    </>,
    p.className,
  )

export const CalendarDays = (p: IconProps) =>
  svg(
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v3M16 3v3" />
      <path d="M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01" />
    </>,
    p.className,
  )

export const Activity = (p: IconProps) =>
  svg(<path d="M3 12h4l2.5-7 5 14L17 12h4" />, p.className)

export const Trophy = (p: IconProps) =>
  svg(
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
      <path d="M12 13v4M9 21h6M10 17h4l1 4H9l1-4Z" />
    </>,
    p.className,
  )

export const Leaf = (p: IconProps) =>
  svg(
    <>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 14-9 14Z" />
      <path d="M4 21c2-6 6-9 11-11" />
    </>,
    p.className,
  )

export const Clock = (p: IconProps) =>
  svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
    p.className,
  )

export const Users = (p: IconProps) =>
  svg(
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" />
    </>,
    p.className,
  )

export const Apple = (p: IconProps) =>
  svg(
    <>
      <path d="M12 7c-1.5-2.5-5-3-6.5 0-1.8 3.5.5 10 3 12 1.2 1 2.3 1 3.5 0s2.3 1 3.5 0c2.5-2 4.8-8.5 3-12-1.5-3-5-2.5-6.5 0Z" />
      <path d="M12 7c0-2 .5-3.5 2.5-4.5" />
      <path d="M14.5 2.5c-1 .5-2 1.5-2.5 3" />
    </>,
    p.className,
  )

export const ShieldCheck = (p: IconProps) =>
  svg(
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    p.className,
  )

export const Check = (p: IconProps) =>
  svg(<path d="m5 12 5 5L20 7" />, p.className)

export const X = (p: IconProps) =>
  svg(<path d="M6 6l12 12M18 6 6 18" />, p.className)

export const ArrowRight = (p: IconProps) =>
  svg(
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>,
    p.className,
  )

export const ChevronDown = (p: IconProps) =>
  svg(<path d="m6 9 6 6 6-6" />, p.className)

export const Quote = (p: IconProps) =>
  svg(
    <>
      <path d="M7 7h4v6a4 4 0 0 1-4 4M7 7c0-1.5 1-2.5 2.5-3" />
      <path d="M15 7h4v6a4 4 0 0 1-4 4M15 7c0-1.5 1-2.5 2.5-3" />
    </>,
    p.className,
  )

export const Star = (p: IconProps) =>
  svg(
    <path
      d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.5 6.8 19.2l1-5.8-4.3-4.1 5.9-.9L12 3Z"
      fill="currentColor"
      stroke="none"
    />,
    p.className,
  )

export const Lock = (p: IconProps) =>
  svg(
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>,
    p.className,
  )

export const Zap = (p: IconProps) =>
  svg(<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />, p.className)

export const HeartPulse = (p: IconProps) =>
  svg(
    <>
      <path d="M3.5 12c2-3 4-4.5 6.5-4.5S14.5 9 16.5 12c2 3-4.5 6.5-6.5 6.5S5.5 15 3.5 12Z" />
      <path d="M3 12h3l1.5-3 2 6 1.5-3h2" />
    </>,
    p.className,
  )

export const Sparkles = (p: IconProps) =>
  svg(
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </>,
    p.className,
  )
