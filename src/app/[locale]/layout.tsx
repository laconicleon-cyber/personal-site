import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const noto = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: {
    default: 'AI Builder — Building Tools for the World',
    template: '%s | AI Builder',
  },
  description: 'AI-powered indie builder creating tools, info platforms, and games for global users.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${noto.variable} ${jetbrains.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
