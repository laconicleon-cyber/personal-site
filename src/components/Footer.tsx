'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-mono text-sm font-bold">{t('brand')}</h3>
            <p className="text-sm text-[var(--color-muted)]">{t('tagline')}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t('links')}</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">{t('projects')}</Link></li>
              <li><Link href="/blog" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">{t('blog')}</Link></li>
              <li><Link href="/about" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">{t('about')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">{t('connect')}</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@yourname.dev" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">hello@yourname.dev</a></li>
              <li><a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">X / Twitter</a></li>
              <li><a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-muted)]">
          © {year} {t('brand')}. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
