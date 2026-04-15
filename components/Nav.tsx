'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Overview' },
  { href: '/projects', label: 'Projects' },
  { href: '/video', label: 'Video' },
  { href: '/blog', label: 'Blog' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-subtle">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display text-sm font-medium tracking-wide text-ink">
          US<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? 'active text-ink' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
