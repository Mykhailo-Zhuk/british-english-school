'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CourseCombobox } from '../index';
import { useTranslations } from 'next-intl';

const TopChooseGroup = () => {
  const t = useTranslations('top_choose_group');
  return (
    <section className="topChooseCourse w-full mt-14">
      <div className="py-20 max-w-[1320px] mx-auto flex flex-col md:flex-row md:space-x-10">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 md:space-y-14 px-5">
          <div className="w-[140px] h-[70px] bg-accent">Logo</div>
          <h1 className="text-2xl md:text-4xl">{t('title')}</h1>
          <CourseCombobox />
        </div>
        <div className="w-full md:w-1/2 p-5">
          <AspectRatio ratio={16 / 9} className="bg-accent">
            Video
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default TopChooseGroup;
