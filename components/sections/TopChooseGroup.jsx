'use client';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { CourseCombobox } from '../index';

const TopChooseGroup = () => {
  return (
    <section className="topChooseCourse w-full py-20">
      <div className="max-w-[1320px] mx-auto flex">
        <div className="w-1/2 flex flex-col space-y-14">
          <div className="w-[140px] h-[70px] bg-indigo-100"></div>
          <h1 className="text-4xl">Курси англійської в Києві Cambridge Assessment English</h1>
          <CourseCombobox />
        </div>
        <div className="w-1/2">
          <AspectRatio ratio={16 / 9} className="bg-indigo-100"></AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default TopChooseGroup;
