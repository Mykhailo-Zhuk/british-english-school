'use client';

import React, { useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import { ScrollArea } from '../../ui/scroll-area';
import { CardItem, CourseCardSkeleton } from '../../main_page/index';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import icons from '@/public/icons/adult';
import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation';

const AdultCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);
  const t = useTranslations('adult_courses_list');

  const itemsPerPage = 8;
  const totalPages = Math.ceil(courses?.adult?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const endIndex = currentPage * itemsPerPage;

  const startIndex = 0;

  const currentPageItems = courses?.adult?.slice(startIndex, endIndex);

  // const pathname = usePathname();
  // const calcURL = pathname.includes('en') ? 'en/courses' : 'courses';

  useEffect(() => {
    sendRequest({ url: 'courses' /* calcURL */ }, setCourses.bind(null));
  }, [sendRequest]);

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-5 px-2">
        <h1 className="text-2xl lg:text-4xl px-3">{t('title')}</h1>
        <p className="text-xl px-3">{t('subtitle')}</p>

        <ScrollArea className="h-max max-h-[1700px] w-full rounded-md">
          <div className="flex space-x-5 xl:space-x-0 my-2 xl:grid xl:grid-cols-4 xl:gap-5 flex-nowrap">
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <CourseCardSkeleton key={id} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              currentPageItems?.map((item, id) => {
                return <CardItem key={id} courses={item} />;
              })
            )}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="dark:hover:bg-slate-500">
            <Image
              src={icons.circle_arrow}
              alt="circle arrow"
              width={20}
              height={18}
              className="mr-3"
            />
            {t('more')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdultCoursesList;
