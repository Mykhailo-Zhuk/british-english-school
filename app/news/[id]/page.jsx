'use client';

import { Header, SubscribeAction, Footer } from '@/components/index.js';
import MainNewsItemContent from '@/components/news/sections/MainContent';

const News = ({ params: { id } }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <MainNewsItemContent itemId={id} />

      {/* Rest news */}

      {/* Subscribe action row */}
      <SubscribeAction />

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default News;
