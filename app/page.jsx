import {
  CourseCards,
  FormatOfLearning,
  GroupForm,
  Header,
  HowTakePlace,
  HowToSign,
  OurTeachers,
  TestActionRow,
  TopChooseGroup,
  TopStatistic,
  Testimonials,
  WhyIsBest,
  Contacts,
  Blog,
  SubscribeAction,
  Footer,
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
      <CourseCards title="дорослих" link="дорослих" value="adult" />

      {/* Courses cards for young students*/}
      <CourseCards title="підлітків 13–17 років" link="підлітків" value="teenagers" />

      {/* Courses cards for children*/}
      <CourseCards title="дітей 6–12 років" link="дітей" value="kids" />

      {/* How to sign section */}
      <HowToSign />

      {/* Group form */}
      <GroupForm />

      {/* Format of learning  */}
      <FormatOfLearning />

      {/* How the learning take place */}
      <HowTakePlace />

      {/* List of Teachers */}
      <OurTeachers />

      {/* Test action row*/}
      <TestActionRow />

      {/* Test action row*/}
      <WhyIsBest />

      {/* Testimonials */}
      <Testimonials />

      {/* Contacts */}
      <Contacts />

      {/* Blog */}
      <Blog />

      {/* Subscribe action row */}
      <SubscribeAction />

      {/* Footer */}
      <Footer />
    </main>
  );
}