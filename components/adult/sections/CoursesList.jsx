import React, { useEffect, useState } from 'react';
import { AdultMainCard, FilterForm } from '../index';
import useHttp from '@/hooks/useHttp';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import icons from '@/public/icons/adult';
import { AdultMainCardSkeleton } from '@/components/skeletons/AdultCoursesSkeleton';

const CoursesList = ({ url }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    type: [],
    programs: [],
    format: [],
    time: [],
    teacher: [],
  });
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = filteredCourses?.courses?.filter((course) => {
    // Check if the course type is in the selected types
    if (filterCriteria?.type?.length > 0 && !filterCriteria?.type?.includes(course?.type?.id)) {
      return false;
    }
    // Check if the course program is in the selected programs
    if (
      filterCriteria?.programs?.length > 0 &&
      !filterCriteria?.programs?.includes(course?.program?.id)
    ) {
      return false;
    }
    // Check if the course format is in the selected formats
    if (
      filterCriteria?.format?.length > 0 &&
      !filterCriteria?.format?.includes(course?.format?.id)
    ) {
      return false;
    }
    // Check if the course time is in the selected times
    if (
      filterCriteria?.time?.length > 0 &&
      !filterCriteria?.time?.includes(course?.time_of_holding?.time)
    ) {
      return false;
    }
    // Check if the course teacher is in the selected teachers
    if (
      filterCriteria?.teacher?.length > 0 &&
      !filterCriteria?.teacher?.includes(course?.teacher?.id)
    ) {
      return false;
    }
    return true; // Include courses that pass all filters
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filtered?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const endIndex = currentPage * itemsPerPage;

  const startIndex = 0;

  const currentPageItems = filtered?.slice(startIndex, endIndex);

  useEffect(() => {
    sendRequest({ url }, setFilteredCourses.bind(null));
  }, [url, sendRequest]);

  const filteredCoursesHandler = (data) => {
    setFilterCriteria(data);
  };

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-[320px_auto]">
        {/* Filter */}
        <div className="w-full max-w-[320px] mx-auto sm:mx-0 px-5">
          <FilterForm
            filterList={filteredCourses.filter}
            isLoading={isLoading}
            error={error}
            filteredCoursesHandler={filteredCoursesHandler}
          />
        </div>
        {/* Courses list */}
        <div className="flex flex-col px-2">
          <div className="flex justify-center sm:justify-start flex-wrap min-h-[40vh]">
            {filtered?.length === 0 && (
              <p className="w-full flex justify-center items-center">Курсів не знайдено</p>
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
            <Button
              variant="ghost"
              onClick={handleNextPage}
              disabled={currentPageItems?.length === 0 || currentPage === totalPages}>
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
