'use client';

import { useTranslations } from 'next-intl';

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
  News,
  SubscribeAction,
  Footer,
  Carousel,
} from '@/components/main_page/index';

const Home = () => {
  const t = useTranslations('course_cards');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start mx-auto">
      {/* Header */}
      <Header />

      {/* Carusel */}
      <Carousel />

      {/* Choose teaching group in the top */}
      <TopChooseGroup />

      {/* Statistic at the top */}
      <TopStatistic />

      {/* Courses cards for older students*/}
      <CourseCards title={t('adult_title')} link={t('adult_link')} value="adult" />

      {/* Courses cards for young students*/}
      <CourseCards title={t('teenagers_title')} link={t('teenagers_link')} value="teenagers" />

      {/* Courses cards for children*/}
      <CourseCards title={t('kids_title')} link={t('kids_link')} value="kids" />

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

      {/* Why is best*/}
      <WhyIsBest />

      {/* Testimonials */}
      <Testimonials />

      {/* Contacts */}
      <Contacts />

      {/* News */}
      <News />

      {/* Subscribe action row */}
      <SubscribeAction />

      {/* Footer */}
      <Footer />
    </main>
  );
};
export default Home;
