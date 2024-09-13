import React from 'react';

const LatestPosts = () => {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex w-full flex-row justify-between gap-2">
        <h3 className="text-lg text-neutral-900">Latest posts</h3>
        <a href="/posts" className="hover:text-neutral-900 cursor-pointer underline decoration-dashed underline-offset-8">
          See all posts
        </a>
      </header>
      <section className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        <a className="group flex max-w-sm cursor-pointer flex-col gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400" href="/posts/tips-to-solve-any-programming-error">
          <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-center">
            <p className="text-neutral-900">10 Tips to Solve Any Programming Error</p>
            <div className="flex flex-row items-center gap-4">
              <p>12/07/2024</p>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-all duration-300 group-hover:translate-x-1">
                <path d="M5.25 12.75L12.75 5.25" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.25 5.25H12.75V12.75" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="truncate">
            As a programmer, you&apos;ve undoubtedly faced perplexing and sometimes frustrating errors. However, with the right techniques and a bit of patience, you can overcome any challenge. Let&apos;s explore the top 10 tips for solving any programming error, including how to leverage the power of AI.
          </p>
        </a>
      </section>
    </article>
  );
};

export default LatestPosts;
