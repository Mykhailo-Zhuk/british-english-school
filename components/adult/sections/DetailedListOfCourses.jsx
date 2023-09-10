'use client';

import useHttp from '@/hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { AdultDetailedCard } from '../index';
import {
  AdultCardSkeleton,
  ProficiencyCardSkeleton,
  ExamsCardSkeleton,
} from '@/components/skeletons/AdultCoursesSkeleton';

const DetailedListOfCourses = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/adult/details' }, setCourses.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Які курси ми пропонуємо?</h1>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl">Курси англійської для дорослих</h1>
          <div className="flex flex-wrap">
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
          <h1 className="text-3xl">Програми для вашого професійного розвитку</h1>
          <div className="flex flex-wrap">
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
          <h1 className="text-3xl">Курси з підготовки до міжнародних іспитів</h1>
          <div className="flex flex-wrap">
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                  return <ExamsCardSkeleton key={id} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              courses?.exams?.map((course, index) => {
                return <AdultDetailedCard key={index} width="w-1/3" course={course} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedListOfCourses;
