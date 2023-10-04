'use client';

import React from 'react';
import {
  Header,
  Testimonials,
  Contacts,
  News,
  SubscribeAction,
  Footer,
} from '@/components/main_page/index';
import { CoursesList } from '@/components/adult/index';
import {
  ChooseTeenagersGroup,
  PrepareToHMT,
  ProgramDescription,
  WhatExamsYouNeed,
} from '@/components/teenagers';

const Kids = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA] dark:bg-slate-800 dark:text-slate-400">
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
