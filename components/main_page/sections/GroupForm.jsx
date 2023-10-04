import React from 'react';
import { InputForm } from '../index';
import { AspectRatio } from '../../ui/aspect-ratio';
import { useTranslations } from 'next-intl';
import images from '@/public/images';
import Image from 'next/image';

const GroupForm = () => {
  const t = useTranslations('group_form');

  return (
    <section className="bg-[#F8F8FA] dark:bg-slate-800 dark:text-slate-400 w-full">
      <div className="h-max py-10 lg:py-20 px-5 max-w-[1320px] space-y-6 w-full mx-auto flex flex-col lg:flex-row lg:space-x-5 lg:space-y-0 lg:px-10">
        <div className="w-full lg:w-1/2 flex max-w-[525px] mx-auto ">
          <AspectRatio ratio={16 / 16}>
            <Image src={images.third} alt="group form" className="rounded-lg" fill />
          </AspectRatio>
        </div>
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="w-full md:w-[525px] h-max p-2 lg:p-12 bg-white dark:bg-slate-700 flex-shrink-0 flex flex-col items-center rounded-lg">
            <h1 className="text-lg lg:text-2xl text-center mb-6">{t('let_choose')}</h1>
            <InputForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupForm;
