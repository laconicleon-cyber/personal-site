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
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-sm text-white">AI</span>
          Builder
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-5">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                      isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'
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
