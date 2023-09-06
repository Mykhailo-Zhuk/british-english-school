'use client';

import React, { useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import { ScrollArea } from '../../ui/scroll-area';
import { CardItem, CourseCardSkeleton } from '../../index';

const AdultCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/adult' }, setCourses.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-5">
        <h1 className="text-4xl">Курси англійської для дорослих</h1>
        <p className="text-xl">від А1 (Beginner) до C2 (Proficiency)</p>

        <ScrollArea className="h-max max-h-[1700px] w-full rounded-md">
          <div className="grid grid-cols-4 gap-4 my-2 flex-wrap">
            {error ? <p className="w-full text-xl text-center p-8">{error}</p> : null}

            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <CourseCardSkeleton key={id} />;
                })
              : null}

            {!courses.length && !error ? (
              <p className="w-full text-xl text-center p-8">We have no courses</p>
            ) : (
              courses.map((item, id) => {
                return <CardItem key={id} courses={item} />;
              })
            )}
          </div>
          <ScrollAreaScrollbar orientation="vertical" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default AdultCoursesList;
