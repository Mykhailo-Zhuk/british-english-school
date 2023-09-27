'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import { AspectRatio } from '../../ui/aspect-ratio';
import { ScrollArea } from '../../ui/scroll-area';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import { LatestNewsSkeleton, OthersNewsSkeleton } from '../../skeletons/NewsSkeletons';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LatestNews = ({ latest, goToItem }) => {
  return (
    <div
      className="w-full max-w-[420px] p-3 hover:bg-accent rounded-lg cursor-pointer"
      onClick={() => goToItem(latest?.id)}>
      <AspectRatio ratio={16 / 11}>
        <Image src={latest?.image} alt="the latest news" className="rounded-md object-cover" />
      </AspectRatio>
      <p className="text-[#A5A5A5] text-sm">{latest?.date}</p>
      <p className="text-xl truncate" title={latest?.title}>
        {latest?.title}
      </p>
    </div>
  );
};

const OthersNews = ({ other, goToItem }) => {
  return (
    <div
      className="flex flex-col md:flex-row space-y-5 w-full md:w-96 h-max md:h-36 p-3 md:space-x-5 hover:bg-accent rounded-lg cursor-pointer"
      onClick={() => goToItem(other?.id)}>
      <div className="w-full md:w-1/2">
        <AspectRatio ratio={23 / 16}>
          <Image src={other?.image} alt="others news" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className="w-full md:w-1/2 flex flex-col max-h-28">
        <p className="text-[#A5A5A5] text-sm">{other?.date}</p>
        <p className="text-xl h-full line-clamp-3" title={other?.title}>
          {other?.title}
        </p>
      </div>
    </div>
  );
};

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const router = useRouter();
  const t = useTranslations('news');

  const goToItemHandler = (id) => {
    router.push(`/news/${id}`);
  };

  const pathname = usePathname();
  const calcURL = pathname.includes('en') ? 'en/news' : 'news';

  useEffect(() => {
    sendRequest({ url: calcURL }, setNewsList.bind(null));
  }, [sendRequest]);

  const [latest, ...others] = newsList;

  return (
    <section className="w-full" id="news">
      <div className="py-10 md:py-20 max-w-[1320px] h-max px-5 max-h-[700px] mx-auto flex flex-col lg:space-x-12">
        <div className="flex justify-between">
          <h3 className="text-2xl">{t('title')}</h3>
          <Button variant="link" className="text-sm hover:text-[#AA4965]">
            <Link href={'news'}>{t('all')}</Link>
          </Button>
        </div>

        {newsList.length === 0 && !isLoading && !error ? (
          <p className="w-full text-xl text-center p-8">{t('error')}</p>
        ) : null}

        {error ? (
          <p className="w-full text-xl text-center p-8">{error}</p>
        ) : (
          <div className="grid lg:grid-cols-[1fr_2fr] grid-cols-1 h-max md:space-x-5">
            <div className="w-full flex justify-center space-x-6">
              {isLoading ? (
                <LatestNewsSkeleton />
              ) : (
                <LatestNews latest={latest} goToItem={goToItemHandler} />
              )}
            </div>

            <div className="w-full">
              <ScrollArea className="h-[280px] xl:h-[480px] w-full max-w-[850px] rounded-lg">
                <div className="w-full max-w-[850px] flex justify-center mb-5 flex-wrap">
                  {isLoading && !error
                    ? Array.from({ length: 6 }, (_, i) => i + 1).map((_, id) => {
                        return <OthersNewsSkeleton key={id} />;
                      })
                    : others?.map((item, index) => {
                        return (
                          <OthersNews key={index + 1} other={item} goToItem={goToItemHandler} />
                        );
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

export default News;
