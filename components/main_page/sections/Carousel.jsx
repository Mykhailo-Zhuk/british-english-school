'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import CarouselSkeleton from '@/components/skeletons/CarouselSkeleton';
import Image from 'next/image';

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
      <p className="w-full min-h-[300px] flex items-center justify-center text-2xl pb-4 pt-20 px-2">
        {error}
      </p>
    );

  if (isLoading) return <CarouselSkeleton />;

  return (
    <section className="w-full max-w-[1320px] pb-5 pt-20">
      <div className="carousel-container">
        <Slider {...settings}>
          {items?.map((item) => (
            <div key={item?.id} className="carousel-item p-4 h-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={item?.content}
                  alt={`carousel-${item.id}`}
                  className="rounded-md"
                  fill
                />
              </AspectRatio>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
