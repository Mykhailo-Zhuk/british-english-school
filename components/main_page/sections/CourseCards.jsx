'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardItem } from '../index';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import { Skeleton } from '../../ui/skeleton';
import Link from 'next/link';
import CourseCardSkeleton from '@/components/skeletons/CourseCardSkeleton';

const CourseCards = ({ title, link, value }) => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses' }, setCourses.bind(null));
  }, []);

  const filteredList = courses[value];

  return (
    <section className="w-full" id="courses">
      <div className="flex flex-col h-max w-full max-w-[1320px] mx-auto pb-20">
        <div className="h-16 inline-flex justify-between">
          <p className="text-xl">
            {isLoading ? <Skeleton className="w-64 h-8 rounded-lg" /> : `Англійська для ${title}`}
          </p>
          <Link href={value}>
            <Button variant="secondary">
              {isLoading ? <Skeleton className="w-32 h-8 rounded-lg" /> : `Всі курси для ${link}`}
              &#707;
            </Button>
          </Link>
        </div>
        <ScrollArea className="h-max w-full rounded-md">
          <div className="flex space-x-5 my-3 flex-nowrap">
            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              filteredList?.map((item, id) => {
                return <CardItem key={id} courses={item} />;
              })
            )}

            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <CourseCardSkeleton key={id} />;
                })
              : null}

            {!filteredList?.length && !error ? (
              <p className="w-full text-xl text-center p-8">We have no courses</p>
            ) : null}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CourseCards;
