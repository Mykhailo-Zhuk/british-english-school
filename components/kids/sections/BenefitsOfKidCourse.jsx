'use client';

import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const BenefitsOfKidCourse = () => {
  const t = useTranslations('benefits_kids');

  const content = [
    {
      title: t('feedback'),
      description: t('feedback_desc'),
    },
    {
      title: t('manager'),
      description: t('manager_desc'),
    },
    {
      title: t('parents'),
      description: t('parents_desc'),
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 md:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-12 px-5">
        <div className="flex flex-col sm:flex-row py-5 px-5 sm:px-10 space-y-5 sm:space-y-0 sm:space-x-8 bg-[#E9EDFC] dark:bg-slate-700 rounded-lg">
          <div className="w-full flex items-end justify-center sm:w-1/3">
            <Image src={images.memoji} alt="parents" />
          </div>
          <div className="w-full md:w-8/12 flex flex-col justify-center space-y-3">
            <h1 className="text-2xl md:text-3xl">{t('title')}</h1>
            <p className="text-xl text-justify">{t('first_subtitle')}</p>
            <p className="text-xl text-justify">{t('second_subtitle')}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 p-2">
          {content.map((item, index) => {
            return (
              <div key={index} className="w-full md:w-1/3 flex flex-col space-y-4 p-1">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-base text-justify">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfKidCourse;
