import React from 'react';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';

const CourseCardSkeleton = () => {
  return (
    <div className="w-[300px] h-[450px] flex-shrink-0 mr-4 mt-4 border rounded-lg hover:shadow-2xl">
      <Skeleton className="relative w-full h-[176px]"></Skeleton>
      <div className="p-5">
        <Skeleton className="w-28 h-4"></Skeleton>
        <div className="flex flex-col mt-4 text-base">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((_, id) => {
            return (
              <div key={id} className="inline-flex justify-between space-x-2 mt-1">
                <Skeleton className="w-28 h-4"></Skeleton>
                <Skeleton className="w-28 h-4"></Skeleton>
              </div>
            );
          })}
          <Separator className="my-4" />
          <div className="inline-flex justify-between space-x-2 mt-1">
            <Skeleton className="w-28 h-4"></Skeleton>
            <div className="flex flex-col space-y-1">
              {Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                return <Skeleton key={id} className="w-32 h-4"></Skeleton>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
