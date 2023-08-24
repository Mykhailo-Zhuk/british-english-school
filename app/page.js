import { CourseCards, Header, TopChooseGroup, TopStatistic } from '@/components/index.js';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start mx-auto">
      {/* Header */}
      <Header />

      {/* Choose teaching group in the top */}
      <TopChooseGroup />

      {/* Statistic at the top */}
      <TopStatistic />

      {/* Courses cards */}
      <CourseCards title={'дорослих'} link={'дорослих'} />
    </main>
  );
}
