'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CourseCombobox } from '../index';
import { IoMdSchool } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import images from '@/public/images';

const TopChooseGroup = () => {
  const t = useTranslations('top_choose_group');
  return (
    <section className="bg-gradient-to-r from-[#dfeafd] to-[#fbebef] w-full mt-14 dark:from-slate-700 dark:to-slate-800 dark:text-slate-400">
      <div className="py-10 md:py-20 max-w-[1320px] mx-auto flex flex-col items-center lg:flex-row lg:space-x-10 px-5">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 lg:space-y-14">
          <div className="flex justify-start">
            <IoMdSchool size={96} />
          </div>
          <h1 className="text-2xl md:text-4xl">{t('title')}</h1>
          <CourseCombobox />
        </div>
        <div className="w-full lg:w-1/2 py-5">
          <AspectRatio ratio={16 / 9}>
            <Image src={images.first} alt="choose group media" fill className="rounded-lg" />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default TopChooseGroup;
