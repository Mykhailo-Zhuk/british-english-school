'use client';

import React from 'react';
import { Button } from './ui/button';
import { CardItem } from './index';

const CourseCards = ({ title, link }) => {
  return (
    <div className="flex flex-col w-full max-w-[1320px] mt-20">
      <div className="h-16 inline-flex justify-between">
        <p className="text-xl">Англійська для {title}</p>
        <Button variant="secondary">Всі курси для {link} &#707;</Button>
      </div>
      <div className="flex space-x-5 flex-nowrap overflow-x-auto">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default CourseCards;
