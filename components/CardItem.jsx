'use client';

import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const CardItem = () => {
  const { title, discount, description, price } = context;

  const isObject = (value) => {
    return typeof value === 'object' && value !== null;
  };

  return (
    <Card className="w-[300px] h-[450px] flex-shrink-0 hover:shadow-2xl">
      <CardHeader className="relative w-full h-[176px] bg-gray-200 ">
        {discount.exist && (
          <div className="absolute bottom-0 right-0 w-max h-6 px-4 rounded-tl-lg text-white text-base bg-red-400">
            {discount.title}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <CardTitle className="mt-4">{title}</CardTitle>
        <div className="flex flex-col mt-4 text-base">
          {description?.map((item) => {
            return (
              <div className="inline-flex justify-between space-x-2 mt-1">
                <p>{item.title}</p>
                <p>{isObject(item.label) ? Object.values(item.label) : item.label}</p>
              </div>
            );
          })}
          <Separator className="my-4" />
          <div className="inline-flex justify-between space-x-2 mt-1">
            <p>{price.title}</p>
            <div className="flex flex-col space-y-1">
              {context.price.list.map((el) => {
                return <p>{el}</p>;
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
