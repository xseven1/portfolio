import FadeIn from '@/components/FadeIn'
import { slos as plos, projects } from '@/lib/data'
import Link from 'next/link'

export default function OverviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Hero */}
      <FadeIn>
        <p className="overline mb-6">MS Applied Data Science · Syracuse University · Class of 2026</p>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h1 className="font-display text-5xl sm:text-6xl font-medium leading-tight mb-8 max-w-3xl">
          Udayan Gaikwad<br />
          <span className="text-accent">MS Applied Data Science</span><br />
          Portfolio
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-muted text-lg max-w-2xl leading-relaxed mb-16">
          This portfolio documents two years of graduate study at the iSchool — from production ML pipelines
          to deep learning research, from cloud infrastructure to local LLM systems. The work spans
          industry problems, academic research, and open-source engineering.
        </p>
      </FadeIn>

      <hr className="rule mb-16" />

      {/* Program Learning Outcomes */}
      <FadeIn delay={0.15}>
        <div className="mb-16">
          <p className="overline mb-8">Program Learning Outcomes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {plos.map((plo, i) => (
              <FadeIn key={plo.id} delay={0.18 + i * 0.04}>
                <div className="border-t-2 border-ink pt-5">
                  <p className="overline text-accent mb-2">{plo.code}</p>
                  <h3 className="font-display text-xl font-medium mb-2">{plo.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{plo.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {plo.projects.map(pid => {
                      const p = projects.find(x => x.id === pid)
                      return p ? (
                        <Link key={pid} href={`/projects#${pid}`} className="tag hover:border-ink hover:text-ink transition-colors">
                          {p.title}
                        </Link>
                      ) : null
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <hr className="rule mb-16" />

      {/* Projects at a glance */}
      <FadeIn delay={0.2}>
        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-8">
            <p className="overline">Portfolio Projects</p>
            <Link href="/projects" className="overline text-accent hover:underline underline-offset-4">
              View all →
            </Link>
          </div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.22 + i * 0.04}>
                <Link href={`/projects#${project.id}`} className="project-card block py-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                    <span className="font-mono text-xs text-muted w-16 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-1">
                        <h3 className="font-display text-xl font-medium group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-muted hidden sm:block">{project.year}</span>
                      </div>
                      <p className="text-muted text-sm">{project.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:w-64 sm:justify-end">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <hr className="rule mb-16" />

      {/* PLO × Project matrix */}
      <FadeIn delay={0.25}>
        <div>
          <p className="overline mb-8">Learning Outcome × Project Matrix</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-mono text-xs text-muted pb-4 pr-6 font-normal w-40">Outcome</th>
                  {projects.map(p => (
                    <th key={p.id} className="text-center font-mono text-xs text-muted pb-4 px-2 font-normal max-w-20">
                      <span className="block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '80px', whiteSpace: 'nowrap' }}>
                        {p.title}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plos.map(plo => (
                  <tr key={plo.id} className="border-t border-subtle">
                    <td className="py-3 pr-6 font-mono text-xs text-muted">{plo.code}</td>
                    {projects.map(project => (
                      <td key={project.id} className="py-3 px-2 text-center">
                        {plo.projects.includes(project.id) ? (
                          <span className="text-accent font-mono text-base">✕</span>
                        ) : (
                          <span className="text-subtle font-mono text-base">·</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
