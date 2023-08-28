'use client';

import React from 'react';
import { Button } from '../ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardItem } from '../index';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';

const CourseCards = ({ title, link }) => {
  return (
    <section className="flex flex-col w-full max-w-[1320px] pb-20">
      <div className="h-16 inline-flex justify-between">
        <p className="text-xl">Англійська для {title}</p>
        <Button variant="secondary">Всі курси для {link} &#707;</Button>
      </div>
      <ScrollArea className="h-[480px] w-full rounded-md border">
        <div className="flex space-x-5 my-3 flex-nowrap">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => {
            return <CardItem key={id} />;
          })}
        </div>
        <ScrollAreaScrollbar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default CourseCards;
