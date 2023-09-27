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
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const CourseCards = ({ title, link, value }) => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const t = useTranslations('course_cards');

  const pathname = usePathname();
  const calcURL = pathname.includes('en') ? 'en/courses' : 'courses';

  useEffect(() => {
    sendRequest({ url: calcURL }, setCourses.bind(null));
  }, []);

  const filteredList = courses[value];

  return (
    <section className="w-full" id="courses">
      <div className="py-10 px-2 sm:px-5 flex flex-col h-max w-full max-w-[1320px] mx-auto ">
        <div className="h-max inline-flex justify-between items-center px-3">
          {isLoading ? (
            <Skeleton className="w-48 md:w-64 h-8 rounded-lg" />
          ) : (
            <p className="text-sm md:text-xl">{title}</p>
          )}

          <Link href={value}>
            <Button variant="secondary">
              {isLoading ? (
                <Skeleton className="w-32 h-8 rounded-lg md:block hidden" />
              ) : (
                <span className="md:block hidden mx-2">{link}</span>
              )}
              &#707;
            </Button>
          </Link>
        </div>
        <ScrollArea className="h-max w-full rounded-md">
          <div className="flex space-x-2 my-3 w-full">
            {error ? (
              <p className="text-xl text-center p-8">{error}</p>
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
              <p className="text-xl text-center p-8">{t('error')}</p>
            ) : null}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CourseCards;
