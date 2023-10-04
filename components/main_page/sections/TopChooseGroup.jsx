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
      <div className="py-20 max-w-[1320px] mx-auto flex flex-col md:flex-row md:space-x-10">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-14 px-5">
          <div className="flex justify-start">
            <IoMdSchool size={96} />
          </div>
          <h1 className="text-2xl md:text-4xl">{t('title')}</h1>
          <CourseCombobox />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <AspectRatio ratio={16 / 9} className="bg-accent">
            <Image src={images.first} alt="choose group media" fill />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default TopChooseGroup;
