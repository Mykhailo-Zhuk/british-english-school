'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HowWeLearn = () => {
  const t = useTranslations('how_we_learn');
  return (
    <section className="w-full bg-gradient-to-r from-[#dfeafd] to-[#fbebef] dark:from-slate-700 dark:to-slate-800">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:space-x-24">
          <div className="w-full lg:w-1/2">
            <AspectRatio ratio={16 / 9}>
              <Image src={images.second} alt="online format media" className="rounded-lg" fill />
            </AspectRatio>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-5">
            <h3 className="text-xl">{t('subtitle_first')}</h3>
            <p className="text-base">{t('first_desc')}</p>
            <h3 className="text-xl">{t('subtitle_second')}</h3>
            <p className="text-base">{t('second_desc')}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">{t('footer')}</div>
      </div>
    </section>
  );
};

export default HowWeLearn;
