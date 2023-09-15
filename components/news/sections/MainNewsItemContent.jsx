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

const SubscribeSocial = ({ item, instagram = false }) => {
  return (
    <div className="flex space-x-5 youtube_link items-center justify-center rounded-lg py-4">
      {instagram ? <FaInstagram size={40} /> : <FaYoutube size={40} />}
      <a
        href={instagram ? item?.socialLink?.instagram : item?.socialLink?.youtube}
        className="text-2xl">
        Subscribe to our {instagram ? 'instagram' : 'youtube channel'}
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

  useEffect(() => {
    sendRequest({ url: `news/${itemId}` }, setNewsItem.bind(null));
  }, []);

  const likesHandler = () => {
    sendRequest({ url: `news/${itemId}`, method: 'put' });
    setLike(true);
  };

  return (
    <section className="w-full">
      <div className="pt-20 max-w-[700px] h-max mx-auto flex flex-col space-y-8">
        <div className="flex w-full space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <Link href="/news">Новини</Link> <span className="mx-1">&#707;</span>
          <p className="truncate">{newsItem?.title}</p>
        </div>
        <h1 className="text-4xl my-10">{newsItem?.title}</h1>
        <AspectRatio ratio={16 / 9}>
          <Image src={newsItem?.image} alt="some image for news" fill />
        </AspectRatio>
        <div className="flex justify-between">
          <div className="flex space-x-10 text-sm text-[#798595] items-center">
            <p>{newsItem?.date}</p>
            <p className="inline-flex items-center">
              <BsEye className="mx-3" /> {newsItem?.views}
            </p>
          </div>
          <div className="flex space-x-4">
            <SocialLinks item={newsItem} />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          {newsItem?.content?.header?.map((item, index) => {
            return (
              <p key={index + 1} className="text-xl">
                {item}
              </p>
            );
          })}
          <SubscribeSocial item={newsItem} />
        </div>
        <h1 className="text-4xl my-10">{newsItem?.content?.subtitleOne?.subtitle}</h1>
        <div className="flex flex-col space-y-4 text-xl">
          {newsItem?.content?.subtitleOne?.content?.map((item, index) => {
            return index === 1 ? (
              <div key={index + 1} className="bg=[#FFF9F5] p-5 border-l-4 border-l-[#FF9649]">
                {item}
              </div>
            ) : (
              <p key={index + 1}>{item}</p>
            );
          })}
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          {newsItem?.content?.subtitleTwo?.content?.map((rowItem, index) => {
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
        <div className="flex flex-col space-y-4 text-xl">
          {newsItem?.content?.footer?.map((item, index) => {
            return <p key={index + 1}>{item}</p>;
          })}
        </div>
        <div className="flex space-x-8">
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
