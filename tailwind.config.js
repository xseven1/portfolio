/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: '#1a1a18',
        paper: '#faf9f6',
        muted: '#6b6a65',
        subtle: '#e8e6df',
        accent: '#c84b31',
      },
    },
  },
  plugins: [],
}
