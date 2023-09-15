'use client';

import { Header, SubscribeAction, Footer } from '@/components/main_page';
import { NewsList } from '@/components/news';

const News = () => {
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
