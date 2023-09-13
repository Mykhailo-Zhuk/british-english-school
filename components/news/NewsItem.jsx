import Image from 'next/image';
import React from 'react';
import { AspectRatio } from '../ui/aspect-ratio';

const NewsItem = ({ news, getId }) => {
  return (
    <div
      className={`${
        news.id === '1' || news.id === '2' ? 'w-1/2' : 'w-1/3'
      } h-max p-5 hover:bg-accent cursor-pointer`}
      onClick={() => getId(news.id)}>
      <AspectRatio ratio={16 / 11}>
        <Image src={news.image} alt="news" className="rounded-md object-cover" />
      </AspectRatio>
      <p className="text-[#A5A5A5] text-sm">{news.date}</p>
      <p className="text-xl truncate" title={news.title}>
        {news.title}
      </p>
    </div>
  );
};

export default NewsItem;
