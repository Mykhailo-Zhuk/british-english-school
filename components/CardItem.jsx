'use client';

import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CardItem = ({ courses }) => {
  const { type, discount, description, price } = courses;

  const isObject = (value) => {
    return typeof value === 'object' && value !== null;
  };

  return (
    <Card className="w-[300px] h-[450px] flex-shrink-0 mt-4 mr-4 hover:shadow-2xl">
      <CardHeader className="relative w-full h-[176px] bg-accent ">
        {discount?.exist && (
          <div className="absolute bottom-0 right-0 w-max h-6 px-4 rounded-tl-lg text-white text-base bg-red-400">
            {discount?.title}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle className="mt-4">{type}</CardTitle>
        <div className="flex flex-col mt-4 text-base">
          {description?.map((item, index) => {
            return (
              <div key={index} className="inline-flex justify-between space-x-2 mt-1">
                <p>{item?.title}</p>
                <p>{isObject(item?.label) ? Object.values(item?.label) : item?.label}</p>
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
