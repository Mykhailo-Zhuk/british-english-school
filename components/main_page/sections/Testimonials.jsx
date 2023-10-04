'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { ScrollArea } from '../../ui/scroll-area';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import TestimonialsSkeleton from '../../skeletons/TestimonialsSkeleton';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

const Testimonial = ({ username, content }) => {
  return (
    <div className="bg-[#F8F8FA] dark:bg-slate-700 rounded-xl w-full p-6 space-y-2 mb-6">
      <h3 className="text-xl">{username}</h3>
      <p className="text-base h-max text-justify">{content}</p>
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);
  const t = useTranslations('reviews');

  const itemsPerPage = 5;
  const totalPages = Math.ceil(testimonials?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, testimonials?.length);

  const currentPageItems = testimonials?.slice(startIndex, endIndex);

  const height = ['h-[300px]', 'h-[220px]', 'h-[310px]', 'h-[130px]'];
  const heightPicker = (id) => (id + height.length) % height.length;

  useEffect(() => {
    sendRequest({ url: 'testimonials' }, setTestimonials.bind(null));
  }, [sendRequest]);

  return (
    <section
      className="w-full bg-[#f5f5f5] dark:bg-slate-800 dark:text-slate-400"
      id="testimonials">
      <div className="py-10 md:py-20 px-5 md:px-10 max-w-[1320px] mx-auto flex flex-col space-y-8">
        <h1 className="text-2xl md:text-3xl px-2 text-center md:text-left">{t('title')}</h1>
        <ScrollArea className="max-h-[460px] md:max-h-[600px] w-full rounded-md">
          <div className="grid grid-cols-1 w-full md:grid-cols-2 max-h-[460px] gap-2 md:max-h-[600px] pt-4">
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
              <p className="w-full text-xl text-center p-8">{t('error')}</p>
            ) : null}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
        <div className="flex items-center justify-center w-full">
          {/* Pagination controls */}
          <Button variant="ghost" onClick={handlePrevPage} disabled={currentPage === 1}>
            <BsFillArrowLeftCircleFill size={18} />
          </Button>
          <span className="mx-2">{currentPage}</span>
          <Button
            variant="ghost"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="dark:hover:bg-slate-400">
            <BsFillArrowRightCircleFill size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
