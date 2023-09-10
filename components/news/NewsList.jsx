import useHttp from '@/hooks/useHttp';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'news' }, setNewsList.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p>Новини</p>
        </div>
        <h1 className="text-4xl">Новини</h1>
        <div className="flex flex-wrap">
          {newsList?.map((news) => {
            return <NewsItem key={news.id} news={news} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
