import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Navbar />

      {/* Hero — invest-nav style */}
      <section className="bg-[var(--color-surface)]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
            {t('hero_build')}
          </div>
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {t('hero_line1')} {t('hero_line2')}
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-base text-[var(--color-muted)]">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              {t('hero_cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project — card style */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold">{t('projects_label')}</h2>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl dark:bg-blue-900/30">
              🌐
            </div>
            <div className="flex-1">
              <h3 className="font-bold">My First Tool Site</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {t('projects_desc')}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                {t('projects_visit')} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline — tutorial cards */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold">{t('pipeline_title')}</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: t('pipeline_tool_title'), desc: t('pipeline_tool_desc'), status: 'In Progress', icon: '🛠️', color: 'bg-blue-50 dark:bg-blue-900/30' },
            { title: t('pipeline_info_title'), desc: t('pipeline_info_desc'), status: 'Planned', icon: '📰', color: 'bg-amber-50 dark:bg-amber-900/30' },
            { title: t('pipeline_game_title'), desc: t('pipeline_game_desc'), status: 'Planned', icon: '🎮', color: 'bg-purple-50 dark:bg-purple-900/30' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color} text-lg`}>
                  {item.icon}
                </div>
                <span className="rounded-full bg-[var(--color-surface)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-muted)]">
                  {item.status}
                </span>
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 text-center">
          <h2 className="text-xl font-bold">{t('newsletter_title')}</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-[var(--color-muted)]">
            {t('newsletter_desc')}
          </p>
          <form className="mx-auto mt-6 flex max-w-md gap-3">
            <input
              type="email"
              placeholder={t('newsletter_email')}
              className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              {t('newsletter_button')}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
