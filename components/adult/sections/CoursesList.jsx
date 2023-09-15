import React, { useEffect, useState } from 'react';
import { AdultMainCard, FilterForm } from '../index';
import useHttp from '@/hooks/useHttp';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import icons from '@/public/icons/adult';
import { AdultMainCardSkeleton } from '@/components/skeletons/AdultCoursesSkeleton';

const CoursesList = ({ url }) => {
  const [adultList, setAdultList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(adultList?.courses?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const endIndex = currentPage * itemsPerPage;

  const startIndex = 0;

  const currentPageItems = adultList?.courses?.slice(startIndex, endIndex);

  useEffect(() => {
    sendRequest({ url }, setAdultList.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] mx-auto grid grid-cols-[350px_auto]">
        {/* Filter */}
        <div className="w-full">
          <FilterForm filterItems={adultList.filter} isLoading={isLoading} error={error} />
        </div>
        {/* Courses list */}
        <div className="flex flex-col ">
          <div className="flex flex-wrap min-h-[40vh]">
            {adultList?.courses?.length === 0 && (
              <p className="flex justify-center items-center">Courses not found</p>
            )}
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <AdultMainCardSkeleton key={id} />;
                })
              : currentPageItems?.map((course) => {
                  return <AdultMainCard key={course.id} course={course} />;
                })}
          </div>
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
      </div>
    </section>
  );
};

export default CoursesList;
