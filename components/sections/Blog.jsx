'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { AspectRatio } from '../ui/aspect-ratio';
import { ScrollArea } from '../ui/scroll-area';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import { LatestNewsSkeleton, OthersNewsSkeleton } from '../skeletons/NewsSkeleton';

const LatestNews = ({ latest }) => {
  const { title, date, image } = latest;
  return (
    <div className="w-full max-w-[420px] p-3 hover:bg-accent rounded-lg">
      <AspectRatio ratio={16 / 11}>
        <Image src={image} alt="the latest news" className="rounded-md object-cover" />
      </AspectRatio>
      <p className="text-[#A5A5A5] text-sm">{date}</p>
      <p className="text-xl truncate" title={title}>
        {title}
      </p>
    </div>
  );
};

const OthersNews = ({ other }) => {
  const { title, date, image } = other;
  return (
    <div className="flex w-96 h-36 p-3 space-x-5 hover:bg-accent rounded-lg">
      <div className="w-1/2">
        <AspectRatio ratio={23 / 16}>
          <Image src={image} alt="others news" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className="w-1/2 flex flex-col max-h-24">
        <p className="text-[#A5A5A5] text-sm">{date}</p>
        <p className="text-xl h-full line-clamp-3" title={title}>
          {title}
        </p>
      </div>
    </div>
  );
};

const Blog = () => {
  const [newsList, setNewsList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'news' }, setNewsList.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="pt-20 max-w-[1320px] max-h-[600px] mx-auto flex flex-col space-x-12">
        <div className="flex justify-between">
          <h3 className="text-2xl">Новини</h3>
          <Button variant="link" className="text-sm hover:text-[#AA4965]">
            Усі статті в блозі
          </Button>
        </div>

        {newsList.length === 0 && !isLoading ? (
          <p className="w-full text-xl text-center p-8">We have no news</p>
        ) : null}

        {error ? (
          <p className="w-full text-xl text-center p-8">{error}</p>
        ) : (
          <div className="grid grid-cols-[1fr_2fr] h-max space-x-5">
            <div className="w-fullflex space-x-6">
              {isLoading ? <LatestNewsSkeleton /> : null}

              {newsList.latest ? <LatestNews latest={newsList.latest} /> : null}
            </div>

            <div className="w-full">
              <ScrollArea className="h-[480px] w-full max-w-[850px] rounded-lg">
                <div className="w-full max-w-[850px] flex mb-5 flex-wrap">
                  {isLoading
                    ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                        return <OthersNewsSkeleton key={id} />;
                      })
                    : null}

                  {newsList.others?.map((item, index) => {
                    return <OthersNews key={index + 1} other={item} />;
                  })}
                </div>
                <ScrollAreaScrollbar orientation="vertical" />
              </ScrollArea>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
