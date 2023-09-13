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
  BenefitsOfCourse,
  BooksToLearn,
  ChooseAdultGroup,
  CoursesList,
  DetailedListOfCourses,
  HowWeLearn,
  WhoWillTeach,
  WhyWeAreTrusted,
} from '@/components/adult/index';

const Kids = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />

      {/* Choose adult group */}
      <ChooseAdultGroup />

      {/* All Courses with filter*/}
      <CoursesList />

      {/* Courses cards for older students*/}
      <AdultCoursesList />

      {/* How we learn */}
      <HowWeLearn />

      {/* Group form */}
      <GroupForm />

      {/* Benefits of cource */}
      <BenefitsOfCourse />

      {/* How to sign section */}
      <HowToSign />

      {/* What books we have */}
      <BooksToLearn />

      {/* Who will teach */}
      <WhoWillTeach />

      {/* Detailed list of cources */}
      <DetailedListOfCourses />

      {/* Why we are trusted */}
      <WhyWeAreTrusted />

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
    </section>
  );
};

export default Kids;
