'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageSwitch from './LanguageSwitch';
import { Link } from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const links = [
    { href: '/', label: t('home') },
    { href: '/projects', label: t('projects') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight font-mono">
          AI Indie Builder
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-[var(--color-accent)] ${
                      isActive ? 'font-semibold text-[var(--color-accent)]' : 'text-[var(--color-muted)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <LanguageSwitch />
        </div>
      </nav>
    </header>
  );
}
