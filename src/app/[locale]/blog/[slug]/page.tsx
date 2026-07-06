import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {Link} from '@/i18n/routing';

export function generateStaticParams() {
  return [
    {slug: 'my-first-ai-tool'},
    {slug: 'why-go-global'},
    {slug: 'ai-coding-tools'},
  ];
}

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const resolvedParams = await params;

  return (
    <>
      <Navbar />

      <article className="mx-auto max-w-5xl px-6 py-12">
        <Link href="/blog" className="text-sm text-[var(--color-accent)] hover:underline">
          ← Back to Blog
        </Link>

        <header className="mt-6 mb-8">
          <h1 className="text-2xl font-bold">
            Building in Public: My Journey as an AI Indie Hacker
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-[var(--color-muted)]">
            <time>July 1, 2026</time>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm">
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <p>
              This is a placeholder blog post. Once you have real content, replace this with your actual article
              written in MDX format. The blog system is set up to support MDX — just drop <code>.mdx</code> files
              into the content directory and they will be rendered as full blog posts.
            </p>
            <h2>Getting Started</h2>
            <p>
              The first step in building for the world is deciding what problem to solve. Here's my framework...
            </p>
            <blockquote>
              The best products come from solving real problems for real people.
            </blockquote>
            <h2>What I Learned</h2>
            <p>
              Building an AI tool site taught me more in 2 weeks than 2 years of traditional development.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
