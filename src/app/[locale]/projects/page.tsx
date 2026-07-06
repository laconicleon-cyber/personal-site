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
      icon: '🛠️',
    },
    {
      name: 'Info Hub Platform',
      description: 'Niche industry news and analysis platform — currently in development.',
      status: 'dev',
      url: '#',
      stack: 'Python, RAG, Next.js',
      icon: '📰',
    },
    {
      name: 'Casual Game Site',
      description: 'AI-generated casual gaming platform — planned for Q3 2026.',
      status: 'planned',
      url: '#',
      stack: 'TBD',
      icon: '🎮',
    },
  ];

  return (
    <>
      <Navbar />

      <section className="w-full px-6 py-12 lg:px-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">{t('title')}</h1>
          <p className="mt-2 text-[var(--color-muted)]">{t('subtitle')}</p>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => {
            const statusLabel = project.status === 'live' ? t('live_badge') :
                                project.status === 'dev' ? t('dev_badge') : t('planned_badge');
            const statusColor = project.status === 'live' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                project.status === 'dev' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                                'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';

            return (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl dark:bg-blue-900/30">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h2 className="font-bold">{project.name}</h2>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor}`}>
                        {statusLabel}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">{project.description}</p>
                    <div className="mt-3">
                      <span className="text-xs font-medium text-[var(--color-muted)]">
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
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline"
                      >
                        {t('visit_site')} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-lg font-bold">{t('roadmap_title')}</h2>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
            <div className="space-y-4">
              {[t('roadmap_q1'), t('roadmap_q2'), t('roadmap_q3'), t('roadmap_q4')].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
