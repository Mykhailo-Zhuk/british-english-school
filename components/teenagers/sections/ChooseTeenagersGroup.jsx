import Link from 'next/link';
import React from 'react';
import { AspectRatio } from '../../ui/aspect-ratio';
import { ContactForm } from '@/components/features';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import images from '@/public/images';

const ChooseTeenagersGroup = () => {
  const t = useTranslations('choose_teenagers_group');

  return (
    <section className="w-full">
      <div className="pt-20 pb-10 lg:pb-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <div className="flex w-full space-x-4 text-sm text-[#A7A7A7] dark:text-slate-400">
          <Link href="/">{t('main')}</Link> <span className="mx-1">&#707;</span>
          <p className="truncate" title={t('title')}>
            {t('title')}
          </p>
        </div>
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <p className="text-xl">{t('first_desc')}</p>
            <p className="text-xl">{t('second_desc')}</p>
            <p className="text-xl">{t('third_desc')}</p>
            <ContactForm />
          </div>
          <div className="w-full lg:w-1/2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={images.first}
                alt="choose teenagers group media"
                className="rounded-lg"
                fill
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseTeenagersGroup;
