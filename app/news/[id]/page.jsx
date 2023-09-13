'use client';

import { Header, SubscribeAction, Footer } from '@/components/index.js';
import NewsList from '@/components/news/NewsList';

const News = ({ params: { id } }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />
      {/* News list  */}
      <NewsList />
      {/* Subscribe action row */}
      <SubscribeAction />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default News;
