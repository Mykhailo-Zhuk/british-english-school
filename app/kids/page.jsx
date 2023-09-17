'use client';

import React from 'react';
import {
  Header,
  Testimonials,
  Contacts,
  News,
  SubscribeAction,
  Footer,
  FormatOfLearning,
  HowToSign,
  OurTeachers,
} from '@/components/main_page/index';
import {
  BenefitsOfKidCourse,
  ChooseKidsGroup,
  HowTakePlace,
  RangeOfAges,
  SchoolYear,
} from '@/components/kids';
import { CoursesList, WhyWeAreTrusted } from '@/components/adult';

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

      {/* Format of learning */}
      <FormatOfLearning kids="true" />

      {/* Benefits */}
      <BenefitsOfKidCourse />

      {/* How to sign */}
      <HowToSign kids="true" />

      {/* List of Teachers */}
      <OurTeachers />

      {/* Why we are trusted */}
      <WhyWeAreTrusted />

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
