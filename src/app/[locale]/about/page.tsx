import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-24">
        {/* Avatar + Intro */}
        <div className="mb-20 flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:gap-12">
          <div className="mb-6 flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-5xl md:mb-0">
            👨‍💻
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
            <p className="mt-3 text-lg text-[var(--color-muted)]">{t('role')}</p>
          </div>
        </div>

        {/* Story */}
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold">{t('story_title')}</h2>
          <p className="mb-4 text-[var(--color-muted)]">{t('story_p1')}</p>
          <p className="text-[var(--color-muted)]">{t('story_p2')}</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">{t('stack_title')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: t('stack_dev'), desc: t('stack_dev_desc') },
              { title: t('stack_ai'), desc: t('stack_ai_desc') },
              { title: t('stack_ops'), desc: t('stack_ops_desc') },
            ].map((stack, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="mb-2 font-semibold">{stack.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{stack.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-20 max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold">{t('philosophy_title')}</h2>
          <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 text-lg italic text-[var(--color-muted)]">
            {t('philosophy_quote')}
          </blockquote>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-8 text-2xl font-bold">{t('contact_title')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: t('contact_email'), value: t('contact_email_val'), href: `mailto:${t('contact_email_val')}` },
              { label: t('contact_x'), value: t('contact_x_val'), href: 'https://x.com/yourhandle' },
              { label: t('contact_github'), value: t('contact_github_val'), href: 'https://github.com/yourname' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]"
              >
                <div className="text-xs text-[var(--color-muted)]">{item.label}</div>
                <div className="mt-1 text-sm font-medium transition-colors group-hover:text-[var(--color-accent)]">
                  {item.value}
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
