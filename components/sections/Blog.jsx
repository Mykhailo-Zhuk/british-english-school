'use client';

import React from 'react';
import { Button } from '../ui/button';
import { AspectRatio } from '../ui/aspect-ratio';
import { ScrollArea } from '../ui/scroll-area';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';

const news = [
  { title: 'Оновлена програма підготовки до…', date: '23.08.2023', image: '' },
  { title: 'Оновлена програма підготовки до…', date: '23.08.2023', image: '' },
  { title: 'Оновлена програма підготовки до…', date: '23.08.2023', image: '' },
];

const Blog = () => {
  return (
    <section className="w-full">
      <div className="pt-20 max-w-[1320px] max-h-[600px] mx-auto flex space-x-12">
        <div className="w-2/3 space-y-5">
          <div className="flex justify-between">
            <h3 className="text-2xl">Блог</h3>
            <Button variant="link" className="text-sm hover:text-[#AA4965]">
              Усі статті в блозі
            </Button>
          </div>
          <div className="flex space-x-6">
            <div className="w-1/2">
              <AspectRatio ratio={16 / 14} className="bg-indigo-100 rounded-lg">
                Photo
              </AspectRatio>
              <p className="text-[#A5A5A5] text-sm">Тетяна Хоролець</p>
              <p className="text-xl">Жовто-блакитні ідіоми та вирази в англійській мові</p>
            </div>
            <div className="w-1/2">
              <AspectRatio ratio={16 / 14} className="bg-indigo-100 rounded-lg">
                Photo
              </AspectRatio>
              <p className="text-[#A5A5A5] text-sm">Вероніка Сироткіна</p>
              <p className="text-xl">
                Все про Present Perfect Continuous: структура, приклади вживання, а також часові
                маркери
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col space-y-5">
          <div className="flex justify-between">
            <h3 className="text-2xl">Новини</h3>
            <Button variant="link" className="text-sm hover:text-[#AA4965]">
              Усі статті в блозі
            </Button>
          </div>
          <ScrollArea className="h-[480px] w-full rounded-md">
            <div className="flex flex-col space-y-5">
              {news.map((item, index) => {
                const { title, date } = item;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="w-1/2">
                      <AspectRatio ratio={16 / 14} className="bg-indigo-100 rounded-lg">
                        Photo
                      </AspectRatio>
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <p className="text-[#A5A5A5] text-sm">{date}</p>
                      <p className="text-xl">{title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <ScrollAreaScrollbar orientation="vertical" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Blog;
