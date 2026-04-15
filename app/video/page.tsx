import FadeIn from '@/components/FadeIn'

export default function VideoPage() {
  // Replace this URL with your actual Loom embed URL
  const LOOM_EMBED_URL = 'https://www.loom.com/embed/YOUR_LOOM_ID_HERE'

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <FadeIn>
        <p className="overline mb-4">Portfolio</p>
        <h1 className="font-display text-5xl font-medium mb-6">Recorded Presentation</h1>
        <p className="text-muted text-lg max-w-2xl mb-16 leading-relaxed">
          A 1–2 minute summary of my time in the MS Applied Data Science program — what I set out to learn,
          what I actually built, and where I'm headed next.
        </p>
      </FadeIn>

      <hr className="rule mb-16" />

      <FadeIn delay={0.1}>
        {/* Video embed */}
        <div className="mb-16">
          <div className="relative w-full rounded overflow-hidden border border-subtle bg-subtle/30"
               style={{ paddingTop: '56.25%' }}>
            <iframe
              src={LOOM_EMBED_URL}
              frameBorder="0"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title="Portfolio Video Presentation"
            />
          </div>
          <p className="font-mono text-xs text-muted mt-3">
            If the embed doesn't load,{' '}
            <a href={LOOM_EMBED_URL.replace('/embed/', '/')} target="_blank" rel="noopener noreferrer"
               className="text-accent underline underline-offset-4">
              watch directly on Loom →
            </a>
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="max-w-2xl">
          <div className="border-t-2 border-ink pt-6 mb-8">
            <h2 className="font-display text-2xl font-medium mb-4">What this video covers</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                label: '00:00 — 00:20',
                text: 'Introduction: who I am, where I came from, and what brought me to the MS ADS program at Syracuse.',
              },
              {
                label: '00:20 — 00:50',
                text: 'The work: a high-level tour of the projects I built — from Preprint Bot in production to the solar defect detection research.',
              },
              {
                label: '00:50 — 01:20',
                text: "What I learned: the skills, frameworks, and ways of thinking that the program changed. What wasn't in any syllabus.",
              },
              {
                label: '01:20 — 01:45',
                text: "What's next: where I'm going — full-time ML engineering, continued open-source work, and ongoing research at Leibniz Lab.",
              },
            ].map(({ label, text }) => (
              <div key={label} className="flex gap-8">
                <span className="font-mono text-xs text-accent shrink-0 pt-1">{label}</span>
                <p className="text-muted text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Placeholder notice */}
      <FadeIn delay={0.2}>
        <div className="mt-16 border border-dashed border-subtle rounded p-6">
          <p className="overline mb-2 text-accent">Note</p>
          <p className="text-muted text-sm">
            The video will be recorded using Loom and embedded here before the final submission deadline.
            Replace <code className="font-mono bg-subtle px-1 rounded text-xs">YOUR_LOOM_ID_HERE</code> in{' '}
            <code className="font-mono bg-subtle px-1 rounded text-xs">app/video/page.tsx</code> with your
            actual Loom video ID.
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
