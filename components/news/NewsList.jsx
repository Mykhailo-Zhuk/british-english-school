import useHttp from '@/hooks/useHttp';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { NewsItemsSkeleton } from '../skeletons/NewsSkeletons';
import { Button } from '../ui/button';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    sendRequest({ url: 'news' }, setNewsList.bind(null));
  }, []);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(newsList?.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, newsList?.length);

  const currentPageItems = newsList?.slice(startIndex, endIndex);

  const getIdHandler = (id) => {
    router.push(`/news/${id}`);
  };

  return (
    <section className="w-full">
      <div className="pt-20 pb-10 lg:pb-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p>Новини</p>
        </div>
        <h1 className="text-2xl lg:text-4xl">Новини</h1>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:flex-wrap">
          {error && <p className="w-full text-center text-3xl p-4">{error}</p>}

          {isLoading &&
            Array.from({ length: 8 }, (_, i) => i + 1).map((_, id) => {
              return <NewsItemsSkeleton key={id} id={id + 1} />;
            })}

          {!isLoading && newsList?.length > 0 ? (
            currentPageItems?.map((item) => {
              return <NewsItem key={item.id} getId={getIdHandler} news={item} />;
            })
          ) : (
            <p className="w-full text-center text-xl p-4">News not found</p>
          )}
          <div className="flex items-center justify-center w-full">
            {/* Pagination controls */}
            <Button variant="ghost" onClick={handlePrevPage} disabled={currentPage === 1}>
              <BsFillArrowLeftCircleFill size={18} />
            </Button>
            <span>{currentPage}</span>
            <Button variant="ghost" onClick={handleNextPage} disabled={currentPage === totalPages}>
              <BsFillArrowRightCircleFill size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
