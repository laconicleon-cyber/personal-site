'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLang = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    const newPath = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLang}
      className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
      aria-label="Switch language"
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
}
