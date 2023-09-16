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
import {
  ChooseTeenagersGroup,
  PrepareToHMT,
  ProgramDescription,
  WhatExamsYouNeed,
} from '@/components/teenagers';
import { ChooseKidsGroup, HowTakePlace, RangeOfAges, SchoolYear } from '@/components/kids';
import { CoursesList } from '@/components/adult';

const Kids = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start mx-auto bg-[#F8F8FA]">
      {/* Header */}
      <Header />

      {/* Choose teenagers group */}
      <ChooseKidsGroup />

      {/* All Courses with filter*/}
      <CoursesList url="courses/kids" />

      {/* Range of ages */}
      <RangeOfAges />

      {/* School year */}
      <SchoolYear />

      {/* How it take place */}
      <HowTakePlace />

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
