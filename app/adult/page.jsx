'use client';

import React from 'react';
import {
  FormatOfLearning,
  GroupForm,
  Header,
  HowTakePlace,
  HowToSign,
  OurTeachers,
  TestActionRow,
  TopStatistic,
  Testimonials,
  WhyIsBest,
  Contacts,
  Blog,
  SubscribeAction,
  Footer,
} from '@/components/index.js';
import {
  AdultCoursesList,
  BenefitsOfCource,
  BooksToLearn,
  ChooseAdultGroup,
  CoursesList,
  DetailedListOfCources,
  HowWeLearn,
  WhoWillTeach,
} from '@/components/adult/index';

const Home = ({ params: { courses } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start mx-auto">
      {/* Header */}
      <Header />

      {/* Choose adult group */}
      <ChooseAdultGroup />

      {/* Statistic at the top */}
      <TopStatistic />

      {/* All Courses with filter*/}
      <CoursesList />

      {/* Courses cards for older students*/}
      <AdultCoursesList />

      {/* How we learn */}
      <HowWeLearn />

      {/* Group form */}
      <GroupForm />

      {/* Benefits of cource */}
      <BenefitsOfCource />

      {/* How to sign section */}
      <HowToSign />

      {/* What books we have */}
      <BooksToLearn />

      {/* Who will teach */}
      <WhoWillTeach />

      {/* Detailed list of cources */}
      <DetailedListOfCources />

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
};

export default Home;
