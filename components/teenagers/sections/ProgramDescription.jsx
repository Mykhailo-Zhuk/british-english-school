'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslations } from 'next-intl';

const ProgramDescription = () => {
  const t = useTranslations('program_description');

  const benefits = [
    {
      title: t('feedback'),
      description: t('feedback_desc'),
    },
    {
      title: t('features'),
      description: t('features_desc'),
    },
    {
      title: t('schedule'),
      description: t('schedule_desc'),
    },
    {
      title: t('speaking_club'),
      description: t('speaking_club_desc'),
    },
  ];

  const types = [
    'Pre Intermediate: A2 Key (KET)',
    'Intermediate: B1 Preliminary (PET)',
    'Upper Intermediate: B2 First (FCE)',
    'Advanced: C1 Advanced (CAE)',
  ];

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-20 space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/2 space-y-3">
            <h2 className="text-xl md:text-2xl">{t('subtitle')}</h2>
            <ul className="space-y-1">
              {types.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <span className="mx-1 text-[10px]">⬤</span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
              <div className="flex flex-col space-y-3 items-center p-5">
                <div className="rounded-full w-36 h-36 program_duration flex flex-col items-center justify-center leading-none text-white p-5">
                  <p className="text-[90px]">9</p>
                  <p className="text-xl">{t('month')}</p>
                </div>
                <p className="text-base text-center">{t('month_desc')}</p>
              </div>
              <p className="text-base max-w-xs">{t('month_subdesc')}</p>
            </div>
          </div>
          <div className="w-full min-h-[160px] lg:w-1/2">
            <AspectRatio ratio={16 / 9} className="rounded-sm bg-accent ">
              Video
            </AspectRatio>
          </div>
        </div>
        <ul className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="flex flex-col space-y-3">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-base">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProgramDescription;
