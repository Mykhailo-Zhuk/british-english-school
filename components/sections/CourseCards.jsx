'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardItem, CourseCardSkeleton } from '../index';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import { Skeleton } from '../ui/skeleton';

const CourseCards = ({ title, link, value }) => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/' + value }, setCourses.bind(null));
  }, []);

  return (
    <section className="flex flex-col w-full max-w-[1320px] pb-20">
      <div className="h-16 inline-flex justify-between">
        <p className="text-xl">
          {isLoading ? <Skeleton className="w-64 h-8 rounded-lg" /> : `Англійська для ${title}`}
        </p>
        <Button variant="secondary">
          {isLoading ? <Skeleton className="w-32 h-8 rounded-lg" /> : `Всі курси для ${link}`}{' '}
          &#707;
        </Button>
      </div>
      <ScrollArea className="h-max w-full rounded-md">
        <div className="flex space-x-5 my-3 flex-nowrap">
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
        <ScrollAreaScrollbar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CourseCards;
