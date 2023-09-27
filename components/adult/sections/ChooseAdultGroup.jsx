import Link from 'next/link';
import React from 'react';
import { Button } from '../../ui/button';
import { AspectRatio } from '../../ui/aspect-ratio';
import { useTranslations } from 'next-intl';

const ChooseAdultGroup = () => {
  const t = useTranslations('choose_adult_group');
  return (
    <section className="w-full">
      <div className="pt-20 pb-10 lg:pb-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">{t('main')}</Link> <span className="mx-1">&#707;</span>
          <p>{t('adult')}</p>
        </div>
        <h1 className="text-2xl lg:text-4xl">{t('adult')}</h1>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="flex flex-col space-y-5 w-full md:w-1/2 text-xl text-justify">
            <p>{t('desc_first')}</p>
            <p>{t('desc_second')}</p>
            <p>{t('desc_third')}</p>
            <Button
              type="submit"
              size="lg"
              className="text-lg text-white bg-[#A14669] h-16 w-52 float-left">
              {t('find')}
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAdultGroup;
