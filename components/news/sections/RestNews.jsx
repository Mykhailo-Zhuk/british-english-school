import { ScrollArea } from '@/components/ui/scroll-area';
import useHttp from '@/hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { NewsItem } from '../index';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import { usePathname, useRouter } from 'next/navigation';
import { RestNewsSkeleton } from '@/components/skeletons/NewsSkeletons';
import { useTranslations } from 'next-intl';

const RestNews = ({ itemId }) => {
  const [newsItems, setNewsItems] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const router = useRouter();
  const t = useTranslations('news_page');

  const pathname = usePathname();
  const calcURL = pathname.includes('en') ? 'en/news' : 'news';

  useEffect(() => {
    sendRequest({ url: calcURL }, setNewsItems.bind(null));
  }, [sendRequest]);

  const getIdHandler = (id) => {
    router.replace(`${id}`);
  };

  const otherNewsItems = newsItems.filter((item) => item.id !== itemId);

  return (
    <div className="py-10 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
      <h1 className="text-2xl lg:text-4xl px-5">{t('rest')}</h1>
      {error ? (
        <p className="w-full text-xl text-center">{error}</p>
      ) : (
        <ScrollArea className="h-max w-[100vw] max-w-[1320px]">
          <div className="flex px-3">
            {isLoading
              ? Array.from({ length: 5 }, (_, i) => i + 1).map((_, id) => {
                  return <RestNewsSkeleton key={id} id={id} />;
                })
              : otherNewsItems?.map((others) => {
                  return (
                    <NewsItem key={others.id} news={others} getId={getIdHandler} fullList={false} />
                  );
                })}
          </div>
          <ScrollAreaScrollbar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};

export default RestNews;
