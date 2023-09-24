'use client';

import React from 'react';
import {
  GroupForm,
  Header,
  HowToSign,
  Testimonials,
  Contacts,
  News,
  SubscribeAction,
  Footer,
} from '@/components/main_page/index';
import {
  BenefitsOfCourse,
  BooksToLearn,
  CoursesList,
  DetailedListOfCourses,
  HowWeLearn,
  WhoWillTeach,
  WhyWeAreTrusted,
} from '@/components/adult/index';
import {
  ChooseTeenagersGroup,
  PrepareToHMT,
  ProgramDescription,
  WhatExamsYouNeed,
} from '@/components/teenagers';

const Kids = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />

      {/* Choose teenagers group */}
      <ChooseTeenagersGroup />

      {/* All Courses with filter*/}
      <CoursesList url="courses/teenagers" />

      {/* Program description */}
      <ProgramDescription />

      {/* What exams you need */}
      <WhatExamsYouNeed />

      {/* Prepare to HMT */}
      <PrepareToHMT />

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
    </section>
  );
};

export default Kids;
