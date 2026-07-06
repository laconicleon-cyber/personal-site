import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';

export default function BlogPage() {
  const t = useTranslations('blog');
  const locale = useLocale();

  const posts = [
    {
      slug: 'my-first-ai-tool',
      date: '2026-07-01',
      title: { en: 'How I Built My First AI Tool Site in 2 Weeks', zh: '我如何在 2 周内构建第一个 AI 工具站' },
      excerpt: { en: 'From idea to launch: the complete process of building an AI-powered tool for overseas users.', zh: '从想法到发布：为海外用户构建 AI 工具的完整过程。' },
      tags: ['AI', 'Indie Hacking'],
    },
    {
      slug: 'why-go-global',
      date: '2026-06-15',
      title: { en: 'Why I Choose to Build for Global Users', zh: '为什么我选择为全球用户构建产品' },
      excerpt: { en: 'The Chinese market is competitive. Going global gives indie developers a much larger playground.', zh: '国内市场已经很卷。出海给独立开发者提供了更大的舞台。' },
      tags: ['出海', 'Strategy'],
    },
    {
      slug: 'ai-coding-tools',
      date: '2026-06-01',
      title: { en: 'My AI Coding Tool Stack in 2026', zh: '2026 年我的 AI 编程工具栈' },
      excerpt: { en: 'A detailed breakdown of every tool I use: Claude, Cursor, v0, and more.', zh: '详细拆解我使用的每一个工具：Claude、Cursor、v0 等。' },
      tags: ['Tools', 'AI'],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="w-full px-6 py-12 lg:px-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold md:text-3xl">{t('title')}</h1>
          <p className="mt-2 text-[var(--color-muted)]">{t('subtitle')}</p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm transition-colors hover:border-[var(--color-accent)]"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--color-muted)]">
                <time>{post.date}</time>
                <span>·</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-50 px-2 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="mt-2 font-bold transition-colors group-hover:text-[var(--color-accent)]">
                {post.title[locale as 'en' | 'zh']}
              </h2>

              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {post.excerpt[locale as 'en' | 'zh']}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                {t('read_more')} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
