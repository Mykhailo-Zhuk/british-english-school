'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const RangeOfAges = () => {
  const t = useTranslations('range_of_ages');

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        <div className="flex flex-col mr-5 space-y-5">
          <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
          <p className="text-xl">{t('top_first_desc')}</p>
          <p className="text-xl">{t('top_second_desc')}</p>
        </div>
        <div className="bg-white dark:bg-slate-700 flex flex-col">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="w-full md:w-2/5 min-h-[200px] p-1">
              <AspectRatio ratio={6 / 9}>
                <Image
                  src={images.third}
                  alt="what exams you need media"
                  className="rounded-lg"
                  fill
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col w-full md:w-3/5 p-5 md:space-y-5">
              <h1 className="text-2xl lg:text-4xl text-center">6-10 {t('years')}</h1>
              <p className="text-xl text-center">{t('first_subtitle')}</p>
            </div>
          </div>
          <div className="bg-[#E9EDFC] dark:bg-slate-700 rounded-md space-y-3 p-5 text-justify">
            <p className="text-base">{t('middle_first_desc')}</p>
            <p className="text-base">{t('middle_second_desc')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-700 flex flex-col">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="w-full md:w-2/5 min-h-[200px] p-1">
              <AspectRatio ratio={6 / 9}>
                <Image
                  src={images.second}
                  alt="what exams you need media"
                  className="rounded-lg"
                  fill
                />
              </AspectRatio>
            </div>
            <div className="flex flex-col w-full md:w-3/5 p-5 md:space-y-5">
              <h1 className="text-2xl lg:text-4xl text-center">11-12 {t('years')}</h1>
              <p className="text-xl text-center">{t('second_subtitle')}</p>
            </div>
          </div>
          <div className="bg-[#E9EDFC] dark:bg-slate-700 rounded-md space-y-3 p-5 text-justify">
            <p className="text-base">{t('end_first_desc')}</p>
            <p className="text-base">{t('end_second_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeOfAges;
