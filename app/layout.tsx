import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Udayan Sharma — MS Applied Data Science',
  description: 'ePortfolio for MS Applied Data Science, Syracuse University iSchool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-subtle mt-24 py-10">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="overline">Udayan Sharma · MS ADS · Syracuse University · 2026</span>
            <div className="flex gap-6">
              <a href="https://github.com/udayansharma" className="overline hover:text-ink transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/udayansharma" className="overline hover:text-ink transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
