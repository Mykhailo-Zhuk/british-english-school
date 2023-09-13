import useHttp from '@/hooks/useHttp';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { useRouter } from 'next/navigation';
import { NewsItemsSkeleton } from '../skeletons/NewsSkeleton';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const router = useRouter();

  useEffect(() => {
    sendRequest({ url: 'news' }, setNewsList.bind(null));
  }, []);

  const getIdHandler = (id) => {
    router.push(`news/${id}`);
  };

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p>Новини</p>
        </div>
        <h1 className="text-4xl">Новини</h1>
        <div className="flex flex-wrap">
          {error && <p className="w-full text-center text-3xl p-4">{error}</p>}

          {isLoading &&
            Array.from({ length: 8 }, (_, i) => i + 1).map((_, id) => {
              return <NewsItemsSkeleton key={id} id={id + 1} />;
            })}

          {!isLoading && newsList?.length > 0 ? (
            newsList?.map((news) => {
              return <NewsItem key={news.id} news={news} getId={getIdHandler} />;
            })
          ) : (
            <p className="w-full text-center text-xl p-4">News not found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
