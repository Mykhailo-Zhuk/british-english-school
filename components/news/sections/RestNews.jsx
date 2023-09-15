import { ScrollArea } from '@/components/ui/scroll-area';
import useHttp from '@/hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { NewsItem } from '../index';
import { ScrollAreaScrollbar } from '@radix-ui/react-scroll-area';
import { useRouter } from 'next/navigation';

const RestNews = ({ itemId }) => {
  const [newsItems, setNewsItems] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const router = useRouter();

  useEffect(() => {
    sendRequest({ url: 'news' }, setNewsItems.bind(null));
  }, []);

  const getIdHandler = (id) => {
    router.replace(`${id}`);
  };

  const otherNewsItems = newsItems.filter((item) => item.id !== itemId);

  return (
    <div className="pt-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
      <h1 className="text-4xl">Інші новини</h1>
      <ScrollArea className="h-[400px] w-full">
        <div className="flex w-full max-w-[1320px] flex-nowrap">
          {otherNewsItems?.map((others) => {
            return <NewsItem key={others.id} news={others} getId={getIdHandler} fullList={false} />;
          })}
        </div>
        <ScrollAreaScrollbar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RestNews;
