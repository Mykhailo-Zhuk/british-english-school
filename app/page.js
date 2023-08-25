import {
  CourseCards,
  GroupForm,
  Header,
  HowToSign,
  TopChooseGroup,
  TopStatistic,
} from '@/components/index.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start mx-auto">
      {/* Header */}
      <Header />

      {/* Choose teaching group in the top */}
      <TopChooseGroup />

      {/* Statistic at the top */}
      <TopStatistic />

      {/* Courses cards for older students*/}
      <CourseCards title={'дорослих'} link={'дорослих'} />

      {/* Courses cards for young students*/}
      <CourseCards title={'підлітків 13–17 років'} link={'підлітків'} />

      {/* Courses cards for children*/}
      <CourseCards title={'дітей 6–12 років'} link={'дітей'} />

      {/* How to sign section */}
      <HowToSign />

      {/* Group form */}
      <GroupForm />
    </main>
  );
}
