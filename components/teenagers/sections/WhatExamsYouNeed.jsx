'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const WhatExamsYouNeed = () => {
  const t = useTranslations('exams_you_need');

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-20 lg:space-y-0">
          <div className="lg:relative w-full md:w-3/5 flex flex-col space-y-5 h-max md:max-h-[588px] md:flex-wrap md:odd:space-y-10 md:odd:space-x-4">
            <div className="w-full md:w-[360px] h-max md:h-[170px] border bg-white dark:text-slate-400 dark:bg-slate-700 rounded-lg md:px-10 px-5 py-5">
              <p className="text-xl">{t('school')}</p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>9 {t('class')}</span>
                <span>A2 Key (KET)</span>
              </p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>11 {t('class')}</span>
                <span>B1 Preliminary (PET)</span>
              </p>
            </div>
            <div className="w-full md:w-[365px] h-[170px] border p-1">
              <AspectRatio ratio={16 / 7}>
                <Image
                  src={images.forth}
                  alt="what exams you need media"
                  className="rounded-lg"
                  fill
                />
              </AspectRatio>
            </div>
            <div className="w-full md:w-[210px] h-[260px] border p-1">
              <AspectRatio ratio={6 / 7}>
                <Image
                  src={images.third}
                  alt="what exams you need media"
                  className="rounded-lg"
                  fill
                />
              </AspectRatio>
            </div>
            <div className="lg:relative w-full md:w-[350px] h-max md:h-[170px] border bg-white dark:text-slate-400 dark:bg-slate-700 rounded-lg md:px-10 px-5 py-5 md:right-40">
              <p className="text-xl">{t('deep_school')}</p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>9 {t('class')}</span>
                <span>B1 Preliminary (PET)</span>
              </p>
              <p className="inline-flex items-center justify-between w-full mt-3">
                <span>11 {t('class')}</span>
                <span>B2 First (FCE)</span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-left">
            <p className="text-xl lg:max-w-md pl-5 border-l-4 border-l-[#A14669]">{t('desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatExamsYouNeed;
