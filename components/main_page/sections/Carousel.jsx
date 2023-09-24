'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import CarouselSkeleton from '@/components/skeletons/CarouselSkeleton';

const Carousel = () => {
  const [items, setItems] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'carousel' }, setItems.bind(null));
  }, [sendRequest]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  if (error)
    return (
      <p className="w-full h-[515px] flex items-center justify-center text-2xl mt-20 md:mt-14 p-4">
        {error}
      </p>
    );

  if (isLoading) return <CarouselSkeleton />;

  return (
    <section className="w-full max-w-[1320px] mt-20 md:mt-14 h-[515px]">
      <div className="carousel-container">
        <Slider {...settings}>
          {items?.map((item) => (
            <div key={item?.id} className="carousel-item bg-gray-200 p-4 h-[515px] rounded-lg">
              <AspectRatio ratio={16 / 6}>{item?.content}</AspectRatio>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
