'use client';

import React, { useEffect, useState } from 'react';
import icons from '@/public/icons';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import { TestimonialsSkeleton } from '../index';

const list = [
  {
    username: 'Тарас',
    content:
      'Мар’яна чудовий викладач, завжди готова допомогти та дати пораду. Заняття завжди проходили інформативно, матеріал викладався логічно та відповідно до вимог екзамену. З досвіду можу добавити, що без курсів підготовки саме по структурі екзамену, здати IELTS вкрай важко. Мар’яна впоралася з цим завданням на 100%. Рекомендую.',
  },
  {
    username: 'Anastasiya Onoshchenko',
    content:
      'I want to share my joy and happiness. I’ve received the results of CAE exam. And also I want to thank you for the whole course again and especially for all the tips you gave us. I really appreciate the way in which you explained every single task. It was extremely helpful for me during my exam. Before you course I was afraid of any kind of writing. And during the exam I was sure what to write and how to do that. I still understand that I have a lot to do, to learn and to brush up (talking about my speaking). Thank you thousand times. Hope to join another your course in future.',
  },
  {
    username: 'Oleksandra',
    content:
      'I would like to express my sincere gratitude to Alona for her time, energy and knowledge she has shared with us during our CAE Preparation online course (September 2020 – January 2021). We had an extremely strong group with a prevailing number of people who already had an impressively high level of English. Taking this into account, Alona managed to skilfully conduct each lesson and meet the requirements of demanding students, professionally overcoming all challenging questions that were arising during the group activities. I really admire Alona’s patience, professionalism, and client-oriented approach, as well as her friendly attitude and a good sense of humour. If you have decided to pass the CAE exam, don’t hesitate to choose Alona’s guidance for your exam preparation journey.',
  },
  {
    username: 'Наталія Ігнат',
    content:
      'Професійно, сучасно, якісно. Рекомендую. Курс бізнес англіської перевершив усі сподівання.',
  },
  {
    username: 'Valery',
    content:
      'Anna was my teacher on the course B2.1 upper intermediate. I liked her manner of teaching! I saw how she liked it and I think it is The most important thing! To love what you are doing! Also, I attend a lot of speaking and grammar clubs with different teachers. But her classes were and are the best!!!! She is so organized and helpful!',
  },
];

const Testimonial = ({ username, content }) => {
  return (
    <div className="bg-[#F8F8FA] rounded-xl w-[49%] p-6 space-y-2 mb-6 mr-6">
      <h3 className="text-xl">{username}</h3>
      <p className="text-base h-max">{content}</p>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(testimonials?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const endIndex = currentPage * itemsPerPage;

  const startIndex = 0;

  const currentPageItems = testimonials?.slice(startIndex, endIndex);

  const height = ['h-[300px]', 'h-[220px]', 'h-[310px]', 'h-[130px]'];
  const heightPicker = (id) => (id + height.length) % height.length;

  useEffect(() => {
    sendRequest({ url: 'testimonials' }, setTestimonials.bind(null));
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="p-20 max-w-[1320px] mx-auto flex flex-col space-y-8">
        <h1 className="text-3xl">Відгуки</h1>
        <ScrollArea className="max-h-[600px] w-full rounded-md">
          <div className="flex flex-col flex-wrap max-h-[600px] pt-4">
            {isLoading
              ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                  return <TestimonialsSkeleton key={id} height={height[heightPicker(id)]} />;
                })
              : null}

            {error ? (
              <p className="w-full text-xl text-center p-8">{error}</p>
            ) : (
              currentPageItems.map((item, index) => {
                const { username, content } = item;

                return <Testimonial key={index} username={username} content={content} />;
              })
            )}

            {!currentPageItems.length && !error ? (
              <p className="w-full text-xl text-center p-8">We have no testimonials</p>
            ) : null}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
        <div className="flex justify-center">
          <Image
            src={icons.refresh}
            alt="refresh"
            width={25}
            height={25}
            className="cursor-pointer"
          />
          <Button
            variant="ghost"
            className="text-[#4A5EAA] text-lg"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            Показати більше відгуків
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
