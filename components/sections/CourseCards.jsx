'use client';

import React from 'react';
import { Button } from '../ui/button';
import { CardItem } from '../index';

const CourseCards = ({ title, link }) => {
  return (
    <section className="flex flex-col w-full max-w-[1320px] pb-20">
      <div className="h-16 inline-flex justify-between">
        <p className="text-xl">Англійська для {title}</p>
        <Button variant="secondary">Всі курси для {link} &#707;</Button>
      </div>
      <div className="flex space-x-5 flex-nowrap overflow-x-auto">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((id) => {
          return <CardItem key={id} />;
        })}
      </div>
    </section>
  );
};

export default CourseCards;
