'use client';

import Image from 'next/image';
import { AspectRatio } from '../ui/aspect-ratio';

const NewsItem = ({ news, getId, fullList = true }) => {
  return (
    <div
      className={`${
        fullList && (news.id === '1' || news.id === '2') ? 'w-full md:w-1/2' : 'w-full md:w-1/3'
      } h-max p-5 min-w-[300px] max-w-[400px] hover:bg-accent rounded-lg cursor-pointer flex flex-col space-y-2`}
      onClick={() => getId(news.id)}>
      <AspectRatio ratio={14 / 9}>
        <Image src={news.image} alt="news" className="rounded-md object-cover" fill />
      </AspectRatio>
      <p className="text-[#A5A5A5] text-sm">{news.date}</p>
      <p className="text-xl line-clamp-3" title={news.title}>
        {news.title}
      </p>
    </div>
  );
};

export default NewsItem;
