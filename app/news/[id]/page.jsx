'use client';

import { Header, SubscribeAction, Footer } from '@/components/index.js';
import { RestNews, MainNewsItemContent } from '@/components/news';

const News = ({ params: { id } }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <MainNewsItemContent itemId={id} />

      {/* Rest news */}
      <RestNews itemId={id} />

      {/* Subscribe action row */}
      <SubscribeAction />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default News;
