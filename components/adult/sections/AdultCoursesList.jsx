'use client';

import React, { useEffect, useState } from 'react';
import useHttp from '@/hooks/useHttp';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import { ScrollArea } from '../../ui/scroll-area';
import { CardItem, CourseCardSkeleton } from '../../main_page/index';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import icons from '@/public/icons/adult';

const AdultCoursesList = () => {
  const [courses, setCourses] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    sendRequest({ url: 'courses' }, setCourses.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-5">
        <h1 className="text-4xl">Курси англійської для дорослих</h1>
        <p className="text-xl">від А1 (Beginner) до C2 (Proficiency)</p>

        <ScrollArea className="h-max max-h-[1700px] w-full rounded-md">
          <div className="grid grid-cols-4 my-2 flex-wrap">
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
          <ScrollAreaScrollbar orientation="vertical" />
        </ScrollArea>
        <div className="flex justify-center items-center">
          <Button variant="ghost" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <Image
              src={icons.circle_arrow}
              alt="circle arrow"
              width={20}
              height={18}
              className="mr-3"
            />
            Показати більше груп
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdultCoursesList;
