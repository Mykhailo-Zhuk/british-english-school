import React from 'react';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';

const context = {
  title: 'Вивчення рівня',
  discount: { exist: true, title: '−10% на курс' },
  description: [
    { title: 'Курс', label: '4,5 місяці' },
    { title: 'Модулів', label: 'від 1 до 3' },
    { title: 'Група', label: 'до 10 студентів' },
    { title: 'Формат', label: { online: '⬤ Онлайн ', offline: '⬤ Оффлайн ' } },
  ],
  price: { title: 'Вартість', list: ['від 6199 грн / модуль', 'від 230 грн / 60 хв'] },
};

const CourseCardSkeleton = () => {
  const { title, description, price } = context;
  return (
    <div className="w-[300px] h-[450px] flex-shrink-0 mr-4 mt-4 border rounded-lg hover:shadow-2xl">
      <Skeleton className="relative w-full h-[176px]"></Skeleton>
      <div className="p-5">
        <p className="font-semibold">{title}</p>
        <div className="flex flex-col mt-4 text-base">
          {description?.map((item, index) => {
            return (
              <div key={index + 1} className="inline-flex justify-between space-x-2 mt-1">
                <p>{item?.title}</p>
                <Skeleton className="w-28 h-5 rounded-lg"></Skeleton>
              </div>
            );
          })}
          <Separator className="my-4" />
          <div className="inline-flex justify-between space-x-2 mt-1">
            <p>{price?.title}</p>
            <div className="flex flex-col space-y-1">
              {price?.list?.map((_, index) => {
                return <Skeleton key={index + 1} className="w-32 h-5 rounded-lg"></Skeleton>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
