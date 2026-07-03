import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center md:py-40">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            {t('hero_build')}
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            {t('hero_tagline')}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-muted)]">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="rounded-lg bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-bg)] transition-opacity hover:opacity-80"
            >
              {t('hero_cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { value: '1', label: t('projects_label') },
            { value: '0', label: 'Live Products' },
            { value: '—', label: 'Monthly Active Users' },
            { value: '—', label: 'Subscribers' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold font-mono">{stat.value}</div>
              <div className="mt-1 text-xs text-[var(--color-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            {t('projects_label')}
          </span>
          <h2 className="mt-2 text-3xl font-bold">
            My First Tool Site
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            {t('projects_desc')}
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="ml-4 flex-1 rounded bg-[var(--color-bg)] px-3 py-1 text-xs text-[var(--color-muted)]">
              https://your-tool-site.pages.dev
            </div>
          </div>
          <div className="flex h-72 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="text-center text-[var(--color-muted)]">
              <div className="mb-2 text-4xl">🌐</div>
              <p className="text-sm">Replace with your project screenshot</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            {t('projects_visit')} →
          </a>
        </div>
      </section>

      {/* Pipeline */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            {t('pipeline_label')}
          </span>
          <h2 className="mt-2 text-3xl font-bold">{t('pipeline_title')}</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: t('pipeline_tool_title'), desc: t('pipeline_tool_desc'), status: 'In Progress' },
              { title: t('pipeline_info_title'), desc: t('pipeline_info_desc'), status: 'Planned' },
              { title: t('pipeline_game_title'), desc: t('pipeline_game_desc'), status: 'Planned' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--color-muted)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-muted)]">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center md:px-16">
          <h2 className="text-2xl font-bold">{t('newsletter_title')}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-muted)]">
            {t('newsletter_desc')}
          </p>
          <form className="mx-auto mt-8 flex max-w-md gap-3">
            <input
              type="email"
              placeholder={t('newsletter_email')}
              className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-[var(--color-bg)] transition-opacity hover:opacity-80"
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
