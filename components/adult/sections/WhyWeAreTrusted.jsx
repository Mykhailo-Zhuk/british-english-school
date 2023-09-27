'use client';

import icons from '@/public/icons/adult';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const WhyWeAreTrusted = () => {
  const t = useTranslations('why_we_are_trusted');

  const contentToRender = [
    {
      value: '4000+',
      description: t('amount_of_students'),
    },
    {
      value: '80+',
      description: t('teachers'),
    },
    {
      value: `14 ${t('years')}`,
      description: t('years_of_teaching'),
    },
    {
      value: '25',
      description: t('programs'),
    },
    {
      icon: icons.people,
      description: t('center'),
    },
    {
      icon: icons.document,
      description: t('strict'),
    },
    {
      icon: icons.web,
      description: t('standarts'),
    },
    {
      icon: icons.chat,
      description: t('menager'),
    },
  ];
  return (
    <section className="w-full bg-accent">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl text-center lg:text-left">{t('title')}</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {contentToRender?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start space-y-2 p-5 w-full md:w-1/3">
                {item?.value ? (
                  <p className="text-4xl text-center lg:text-left">{item?.value}</p>
                ) : (
                  <Image src={item?.icon} alt="icon" width={40} height={40} />
                )}
                <p className="text-xl text-center lg:text-left">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreTrusted;
