'use client';

import { Fragment } from 'react';
import { Skeleton } from '../ui/skeleton';

export const AdultCardSkeleton = () => {
  return (
    <div className="w-[634px] p-5 space-y-4 h-[540px] mt-5 odd:mr-5 text-sm bg-accent rounded-lg">
      <div className="flex items-center flex-wrap space-x-4">
        <Skeleton className="w-48 h-6"></Skeleton>
        <Skeleton className="w-24 h-8 px-2 py-2 rounded-full"></Skeleton>
      </div>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
        return (
          <div key={id} className="flex space-x-3">
            <Skeleton className="w-32 h-4"></Skeleton>
            <Skeleton className="w-32 mx-2 h-4"></Skeleton>
          </div>
        );
      })}
      {Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
        return <Skeleton key={id} className="h-16 w-full"></Skeleton>;
      })}

      <ul className="space-y-2">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
          return (
            <Fragment key={id}>
              <Skeleton className="h-4 w-3/4"></Skeleton>
            </Fragment>
          );
        })}
      </ul>

      <Skeleton className="float-left w-48 h-10"></Skeleton>
    </div>
  );
};

export const ProficiencyCardSkeleton = () => {
  return (
    <div className="w-[634px] p-5 space-y-4 h-[480px] mt-5 odd:mr-5 text-sm bg-accent rounded-lg">
      <div className="flex items-center flex-wrap space-x-4">
        <Skeleton className="w-48 h-6"></Skeleton>
        <Skeleton className="w-24 h-8 px-2 py-2 rounded-full"></Skeleton>
      </div>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
        return (
          <div key={id} className="flex my-1 space-x-3">
            <Skeleton className="w-32 h-4"></Skeleton>
            <Skeleton className="w-32 mx-2 h-4"></Skeleton>
          </div>
        );
      })}
      {Array.from({ length: 1 }, (_, i) => i + 1).map((_, id) => {
        return <Skeleton key={id} className="h-16 w-full"></Skeleton>;
      })}

      <ul className="space-y-2">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((_, id) => {
          return (
            <Fragment key={id}>
              <Skeleton className="h-4 w-1/3"></Skeleton>
            </Fragment>
          );
        })}
      </ul>

      <Skeleton className="float-left w-48 h-10"></Skeleton>
    </div>
  );
};

export const ExamsCardSkeleton = () => {
  return (
    <div className="w-[440px] p-5 space-y-4 h-[210px] mt-5 odd:mr-5 text-sm bg-accent rounded-lg">
      <div className="flex items-center flex-wrap space-x-4">
        <Skeleton className="w-48 h-6"></Skeleton>
        <Skeleton className="w-24 h-8 px-2 py-2 rounded-full"></Skeleton>
      </div>
      <ul className="space-y-2">
        {Array.from({ length: 1 }, (_, i) => i + 1).map((_, id) => {
          return (
            <Fragment key={id}>
              <Skeleton className="h-4 w-3/4"></Skeleton>
            </Fragment>
          );
        })}
      </ul>

      <Skeleton className="float-left w-48 h-10"></Skeleton>
    </div>
  );
};
