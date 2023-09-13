'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaTelegram } from 'react-icons/fa';

const MainNewsItemContent = ({ itemId }) => {
  const [newsItem, setNewsItem] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: `news/${itemId}` }, setNewsItem.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[700px] h-max mx-auto flex flex-col space-y-14">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <Link href="/news">Новини</Link> <span className="mx-1">&#707;</span>
          <p>{newsItem?.title}</p>
        </div>
        <h1 className="text-4xl">{newsItem.title}</h1>
        <AspectRatio ratio={16 / 9}>
          <Image src={newsItem?.image} alt="some image for news" fill />
        </AspectRatio>
        <p className="my-1"></p>
      </div>
    </section>
  );
};

export default MainNewsItemContent;
