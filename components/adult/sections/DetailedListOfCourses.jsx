'use client';

import useHttp from '@/hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { AdultDetailedCard } from '../index';
import {
  AdultCardSkeleton,
  ProficiencyCardSkeleton,
  ExamsCardSkeleton,
} from '@/components/skeletons/AdultCoursesSkeleton';
import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation';

const DetailedListOfCourses = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const t = useTranslations('detailed_list_of_courses');

  // const pathname = usePathname();
  // const calcURL = pathname.includes('en') ? 'en/courses/adult/details' : 'courses/adult/details';

  useEffect(() => {
    sendRequest({ url: 'courses/adult/details' /*calcURL*/ }, setCourses.bind(null));
  }, [sendRequest]);

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl lg:text-3xl">{t('adult')}</h1>
          <div className="flex flex-wrap md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <AdultCardSkeleton key={id} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              courses?.adult?.map((course, index) => {
                return <AdultDetailedCard key={index} course={course} />;
              })
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl lg:text-3xl">{t('dev_program')}</h1>
          <div className="flex flex-wrap md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                  return <ProficiencyCardSkeleton key={id} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              courses?.proficiency?.map((course, index) => {
                return <AdultDetailedCard key={index} course={course} />;
              })
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl lg:text-3xl">{t('external_exam')}</h1>
          <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                  return <ExamsCardSkeleton key={id} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              courses?.exams?.map((course, index) => {
                return <AdultDetailedCard key={index} course={course} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedListOfCourses;
