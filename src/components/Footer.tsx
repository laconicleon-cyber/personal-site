'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto w-full px-6 py-10 lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-accent)] text-xs text-white">AI</span>
            Builder
          </div>
          <p className="text-sm text-[var(--color-muted)]">{t('tagline')}</p>
          <div className="flex items-center gap-6">
            <Link href="/projects" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">{t('projects')}</Link>
            <Link href="/blog" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">{t('blog')}</Link>
            <Link href="/about" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">{t('about')}</Link>
          </div>
          <p className="text-xs text-[var(--color-muted)]">© {year} {t('brand')}. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
