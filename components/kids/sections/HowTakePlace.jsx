'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HowTakePlace = () => {
  const t = useTranslations('how_take_place_kids');

  const content = [
    {
      title: t('programs'),
      decription: t('programs_desc'),
    },
    {
      title: t('interactive'),
      decription: t('interactive_desc'),
    },
    {
      title: t('materials'),
      decription: t('materials_desc'),
    },
    {
      title: t('support'),
      decription: t('support_desc'),
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr),_minmax(0,_2fr)] md:space-x-10">
          <div className="bg-white dark:bg-slate-700 rounded-lg w-full p-6 space-y-3 text-base h-max">
            <p>{t('first_desc')}</p>
            <p>{t('second_desc')}</p>
            <div className="w-full min-h-[256px] mx-auto">
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={images.third}
                  alt="how take place media"
                  className="rounded-lg"
                  fill
                />
              </AspectRatio>
            </div>
          </div>
          <div className="flex flex-wrap p-6">
            {content.map((item, index) => {
              return (
                <div key={index} className="flex flex-col space-y-6 w-full lg:w-2/5 md:mr-5 mb-10">
                  <h2 className="text-xl">{item.title}</h2>
                  <p className="text-base text-justify">{item.decription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTakePlace;
