import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  const projects = [
    {
      name: 'AI Tool Site #1',
      description: 'My first independently launched product. An AI-powered tool for overseas users.',
      status: 'live',
      url: '#',
      stack: 'Next.js, TypeScript, Tailwind, Cloudflare Pages',
    },
    {
      name: 'Info Hub Platform',
      description: 'Niche industry news and analysis platform — currently in development.',
      status: 'dev',
      url: '#',
      stack: 'Python, RAG, Next.js',
    },
    {
      name: 'Casual Game Site',
      description: 'AI-generated casual gaming platform — planned for Q3 2026.',
      status: 'planned',
      url: '#',
      stack: 'TBD',
    },
  ];

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
          <p className="mt-4 text-lg text-[var(--color-muted)]">{t('subtitle')}</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => {
            const statusLabel = project.status === 'live' ? t('live_badge') :
                                project.status === 'dev' ? t('dev_badge') : t('planned_badge');
            const statusColor = project.status === 'live' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                project.status === 'dev' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';

            return (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-xs font-mono text-[var(--color-muted)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor}`}>
                        {statusLabel}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p className="mt-3 text-[var(--color-muted)]">{project.description}</p>
                    <div className="mt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                        {t('stack_label')}
                      </span>
                      <p className="mt-1 text-sm font-mono text-[var(--color-muted)]">
                        {project.stack}
                      </p>
                    </div>
                    {project.status === 'live' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-opacity hover:opacity-70"
                      >
                        {t('visit_site')} →
                      </a>
                    )}
                  </div>

                  <div className="md:w-80 flex items-center justify-center bg-[var(--color-surface)] p-8">
                    <div className="text-center text-[var(--color-muted)]">
                      <div className="mb-2 text-3xl">🖥️</div>
                      <p className="text-xs">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roadmap */}
        <div className="mt-24">
          <h2 className="mb-8 text-2xl font-bold">{t('roadmap_title')}</h2>
          <div className="space-y-6">
            {[t('roadmap_q1'), t('roadmap_q2'), t('roadmap_q3'), t('roadmap_q4')].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-[var(--color-accent)]"></div>
                  {i < 3 && <div className="h-12 w-px bg-[var(--color-border)]"></div>}
                </div>
                <div className="pt-0.5">
                  <p className="text-sm font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
