import FadeIn from '@/components/FadeIn'
import { projects, slos as plos } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <FadeIn>
        <p className="overline mb-4">Portfolio</p>
        <h1 className="font-display text-5xl font-medium mb-6">Projects</h1>
        <p className="text-muted text-lg max-w-2xl mb-16 leading-relaxed">
          Six projects spanning production ML systems, deep learning research, full-stack engineering,
          and local AI applications — each one built to solve a real problem.
        </p>
      </FadeIn>

      <hr className="rule mb-16" />

      <div className="space-y-24">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.05}>
            <article id={project.id} className="scroll-mt-20">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
                <div className="sm:w-12 shrink-0">
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1">
                  <div className="border-t-2 border-ink pt-5 mb-5">
                    <p className="overline mb-2">{project.year}</p>
                    <h2 className="font-display text-3xl sm:text-4xl font-medium mb-2">{project.title}</h2>
                    <p className="text-muted text-lg">{project.tagline}</p>
                  </div>

                  {/* Impact callout */}
                  <div className="bg-subtle/60 border border-subtle rounded px-5 py-4 mb-6">
                    <p className="overline mb-1">Impact</p>
                    <p className="font-mono text-xs text-ink">{project.impact}</p>
                  </div>

                  {/* Body */}
                  <div className="prose-editorial space-y-4 mb-8">
                    {project.description.split('\n\n').map((para, j) => (
                      <p key={j} className="text-base leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <p className="overline mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* PLOs */}
                  <div className="mb-8">
                    <p className="overline mb-3">Learning Outcomes Demonstrated</p>
                    <div className="flex flex-wrap gap-3">
                      {project.slos.map(sloId => {
                        const plo = plos.find(p => p.id === sloId)
                        return plo ? (
                          <div key={sloId} className="flex items-center gap-2">
                            <span className="text-accent font-mono text-xs">{plo.code}</span>
                            <span className="text-muted text-xs">— {plo.title}</span>
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>

                  {/* Links */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-subtle px-4 py-2 rounded hover:border-ink hover:text-ink transition-colors"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>

              {i < projects.length - 1 && <hr className="rule" />}
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
