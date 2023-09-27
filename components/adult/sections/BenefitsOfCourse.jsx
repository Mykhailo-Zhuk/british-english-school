'use client';

import icons from '@/public/icons';
import Image from 'next/image';
import images from '@/public/images';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslations } from 'next-intl';

const BenefitsOfCourse = () => {
  const t = useTranslations('benefits');

  const context = [t('benefit_first'), t('benefit_second'), t('benefit_third'), t('benefit_forth')];
  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-5 md:space-y-10 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <ul className="space-y-10">
            {context?.map((item, index) => {
              return (
                <li key={index} className="relative text-xl py-1 pl-5 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="space-y-10">
            {context?.map((item, index) => {
              return (
                <li key={index} className="relative text-xl py-1 pl-5 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <div className="p-6 w-96 h-max md:h-96 bg-[#E9EDFC] flex flex-col space-y-2 items-center rounded-lg">
              <p className="text-xl text-center">{t('main_desc')}</p>
              <Image src={images.memoji} width={200} height={178} alt="memoji" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col space-y-8 bg-white rounded-lg px-2 py-5 md:p-8">
            <h1 className="text-2xl lg:text-4xl">{t('online')}</h1>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">{t('online_desc')}</p>
          </div>
          <div className="flex flex-col space-y-8 bg-white rounded-lg px-2 py-5 md:p-8">
            <h1 className="text-2xl lg:text-4xl">{t('offline')}</h1>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">{t('offline_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfCourse;
