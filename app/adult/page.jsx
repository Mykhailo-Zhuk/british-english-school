'use client';

import React from 'react';
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
  ChooseAdultGroup,
  CoursesList,
  AdultCoursesList,
} from '@/components/index.js';

const Home = ({ params: { courses } }) => {
  console.log(courses);

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
};

export default Home;
