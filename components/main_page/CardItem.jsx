'use client';

import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '../ui/aspect-ratio';
import Image from 'next/image';

const CardItem = ({ courses }) => {
  const { type, image, discount, description, price } = courses;

  const isObject = (value) => {
    return typeof value === 'object' && value !== null;
  };

  return (
    <Card className="w-[300px] h-[450px] flex-shrink-0 hover:shadow-2xl dark:bg-slate-700 dark:text-slate-400 dark:border-transparent">
      <CardHeader className="relative w-full h-[176px] p-2 space-y-0 overflow-hidden">
        {discount?.exist && (
          <div className="absolute bottom-0 right-0 w-max h-6 px-4 rounded-tl-lg text-white text-base bg-red-400 dark:bg-red-950 z-50">
            {discount?.title}
          </div>
        )}
        <Image src={image} alt={type} fill />
      </CardHeader>
      <CardContent>
        <CardTitle className="mt-4">{type}</CardTitle>
        <div className="flex flex-col mt-4 text-base">
          {description?.map((item, index) => {
            return (
              <div key={index} className="inline-flex justify-between space-x-2 mt-1">
                <p>{item?.title}</p>

                {isObject(item?.label) ? (
                  Object.values(item?.label).map((el) => {
                    return (
                      <p className="inline-flex items-center">
                        {el === 'Онлайн' || el === 'Online' ? (
                          <span className="text-[#4295F3] mx-1">⬤</span>
                        ) : (
                          <span className="text-[#A14669] mx-1">⬤</span>
                        )}{' '}
                        {el}
                      </p>
                    );
                  })
                ) : (
                  <p>{item?.label}</p>
                )}
              </div>
            );
          })}
          <Separator className="my-4" />
          <div className="inline-flex justify-between space-x-2 mt-1">
            <p>{price?.title}</p>
            <div className="flex flex-col space-y-1">
              {price?.list?.map((el, index) => {
                return <p key={index}>{el}</p>;
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
