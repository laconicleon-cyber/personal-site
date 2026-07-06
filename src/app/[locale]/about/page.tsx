import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <Navbar />

      <section className="w-full px-6 py-12 lg:px-12">
        <div className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-3xl dark:bg-blue-900/30">
              👨‍💻
            </div>
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">{t('title')}</h1>
              <p className="text-sm text-[var(--color-muted)]">{t('role')}</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold">{t('story_title')}</h2>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
            <p className="mb-3 text-[var(--color-muted)]">{t('story_p1')}</p>
            <p className="text-[var(--color-muted)]">{t('story_p2')}</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold">{t('stack_title')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: t('stack_dev'), desc: t('stack_dev_desc'), icon: '💻' },
              { title: t('stack_ai'), desc: t('stack_ai_desc'), icon: '🤖' },
              { title: t('stack_ops'), desc: t('stack_ops_desc'), icon: '📊' },
            ].map((stack, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">{stack.icon}</span>
                  <h3 className="font-bold">{stack.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{stack.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-lg font-bold">{t('philosophy_title')}</h2>
          <div className="rounded-xl border-l-4 border-[var(--color-accent)] bg-[var(--color-accent-light)] p-6">
            <p className="text-base font-medium italic text-[var(--color-fg)]">
              {t('philosophy_quote')}
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">{t('contact_title')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: t('contact_email'), value: t('contact_email_val'), href: `mailto:${t('contact_email_val')}`, icon: '📧' },
              { label: t('contact_x'), value: t('contact_x_val'), href: 'https://x.com/yourhandle', icon: '🐦' },
              { label: t('contact_github'), value: t('contact_github_val'), href: 'https://github.com/yourname', icon: '📦' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-sm transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)]"
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <div className="text-xs text-[var(--color-muted)]">{item.label}</div>
                  <div className="text-sm font-medium text-[var(--color-accent)]">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
