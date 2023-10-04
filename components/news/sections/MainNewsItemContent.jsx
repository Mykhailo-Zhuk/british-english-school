'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation';

const SubscribeSocial = ({ item }) => {
  const t = useTranslations('news_page');

  return (
    <div className="flex space-x-5 youtube_link items-center justify-center rounded-lg py-4">
      <FaInstagram size={40} />
      <a
        href={item?.socialLink?.instagram}
        className="text-xl sm:text-2xl w-min sm:w-max min-w-[170px]">
        {t('instagram')}
      </a>
    </div>
  );
};

const SocialLinks = ({ item }) => {
  return (
    <div className="flex items-center space-x-6">
      <a href={item?.socialLink?.meta} target="_blank" rel="noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href={item?.socialLink?.x} target="_blank" rel="noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href={item?.socialLink?.linkedIn} target="_blank" rel="noreferrer">
        <FaLinkedinIn size={30} />
      </a>
      <a href={item?.socialLink?.telegram} target="_blank" rel="noreferrer">
        <FaTelegram size={30} />
      </a>
    </div>
  );
};

const MainNewsItemContent = ({ itemId }) => {
  const [newsItem, setNewsItem] = useState([]);
  const [like, setLike] = useState(false);
  const { sendRequest, error, isLoading } = useHttp();
  const t = useTranslations('news_page');

  // const pathname = usePathname();
  // const calcURL = pathname.includes('en') ? `en/news/${itemId}` : `news/${itemId}`;

  useEffect(() => {
    sendRequest({ url: `news/${itemId}` /*calcURL*/ }, setNewsItem.bind(null));
  }, [sendRequest, itemId]);

  const likesHandler = () => {
    sendRequest({ url: `news/${itemId}`, method: 'put' });
    setLike(true);
  };

  return (
    <section className="w-full">
      <div className="pt-20 pb-10 px-5 max-w-[700px] h-max mx-auto flex flex-col space-y-8">
        <div className="flex w-full space-x-4 text-sm text-[#A7A7A7] dark:text-slate-400">
          <Link href="/">{t('main')}</Link> <span className="mx-1">&#707;</span>
          <Link href="/news">{t('title')}</Link> <span className="mx-1">&#707;</span>
          {isLoading ? (
            <Skeleton className="w-full h-8"></Skeleton>
          ) : (
            <p className="line-clamp-2" title={newsItem?.title}>
              {newsItem?.title}
            </p>
          )}
        </div>

        {isLoading ? (
          <Skeleton className="w-full h-24"></Skeleton>
        ) : (
          <h1 className="text-2xl lg:text-4xl my-10 text-justify">{newsItem?.title}</h1>
        )}

        {isLoading ? (
          <Skeleton className="w-full h-[370px]"></Skeleton>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <Image src={newsItem?.image} alt="some image for news" fill />
          </AspectRatio>
        )}

        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-start sm:justify-between">
          <div className="flex space-x-10 text-sm text-[#798595] justify-between sm:justify-start items-center">
            {isLoading ? <Skeleton className="w-20 h-5"></Skeleton> : <p>{newsItem?.date}</p>}
            <p className="inline-flex items-center">
              <BsEye className="mx-3" />{' '}
              {isLoading ? <Skeleton className="w-5 h-4"></Skeleton> : newsItem?.views}
            </p>
          </div>
          <div className="flex justify-evenly space-x-4">
            <SocialLinks item={newsItem} />
          </div>
        </div>
        {error ? (
          <p className="w-full text-xl text-center">{error}</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {isLoading
              ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                  return <Skeleton key={id} className="w-full h-32"></Skeleton>;
                })
              : newsItem?.content?.header?.map((item, index) => {
                  return (
                    <p key={index + 1} className="text-xl text-justify">
                      {item}
                    </p>
                  );
                })}
          </div>
        )}
        <h1 className="text-2xl md:text-4xl my-10">
          {isLoading ? (
            <Skeleton className="w-9/12 h-16"></Skeleton>
          ) : (
            newsItem?.content?.subtitleOne?.subtitle
          )}
        </h1>

        <div className="flex flex-col space-y-4 text-xl text-justify">
          {isLoading
            ? Array.from({ length: 4 }, (_, i) => i + 1).map((_, id) => {
                return <Skeleton key={id} className="w-full h-32"></Skeleton>;
              })
            : newsItem?.content?.subtitleOne?.content?.map((item, index) => {
                return index === 1 ? (
                  <div key={index + 1} className="bg=[#FFF9F5] p-5 border-l-4 border-l-[#FF9649]">
                    {item}
                  </div>
                ) : (
                  <p key={index + 1}>{item}</p>
                );
              })}
        </div>

        <div className="flex flex-col space-y-4 text-xl text-justify">
          {isLoading
            ? Array.from({ length: 4 }, (_, i) => i + 1).map((_, id) => {
                return <Skeleton key={id} className="w-full h-32"></Skeleton>;
              })
            : newsItem?.content?.subtitleTwo?.content?.map((rowItem, index) => {
                if (typeof rowItem === 'object') {
                  if (rowItem.list) {
                    return (
                      <ul key={index + 1} className="space-y-4">
                        {rowItem.list.map((listItem, liIndex) => (
                          <li key={liIndex + 1} className="px-10">
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (rowItem.highlight) {
                    return (
                      <div
                        key={index + 1}
                        className="flex items-center bg-[#FFF9F5] p-5 border-l-4 border-l-[#FF9649]">
                        {rowItem.highlight}
                      </div>
                    );
                  }
                } else {
                  return <p key={index + 1}>{rowItem}</p>;
                }
              })}
          <SubscribeSocial item={newsItem} instagram="true" />
        </div>
        {error ? (
          <p className="w-full text-xl text-center">{error}</p>
        ) : (
          <div className="flex flex-col space-y-4 text-xl text-justify">
            {isLoading
              ? Array.from({ length: 3 }, (_, i) => i + 1).map((_, id) => {
                  return <Skeleton key={id} className="w-full h-32"></Skeleton>;
                })
              : newsItem?.content?.footer?.map((item, index) => {
                  return <p key={index + 1}>{item}</p>;
                })}
          </div>
        )}
        <div className="flex justify-evenly sm:justify-between space-x-8">
          <Button variant="ghost" type="button" onClick={likesHandler}>
            {like ? <AiFillLike size={30} /> : <AiOutlineLike size={30} />}
          </Button>
          <SocialLinks item={newsItem} />
        </div>
      </div>
    </section>
  );
};

MainNewsItemContent.propTypes = {
  itemId: PropTypes.string,
};

export default MainNewsItemContent;
