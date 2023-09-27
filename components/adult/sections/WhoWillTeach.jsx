'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslations } from 'next-intl';

const TeacherSkill = ({ item }) => {
  return (
    <div className="relative w-full h-max min-h-[96px] flex-shrink-0 teachers-skills-border rounded-lg p-5 z-10">
      <p className="text-base py-1 text-black">{item}</p>
      <div className="absolute inset-1 bg-white rounded-lg -z-10" />
    </div>
  );
};

const WhoWillTeach = () => {
  const t = useTranslations('who_will_teach');

  const skills = [t('skill_first'), t('skill_second')];

  const skillsWithBorder = [t('skill_third'), t('skill_forth')];
  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 flex flex-col h-max w-full max-w-[1320px] mx-auto space-y-7 px-5">
        <div className="h-max inline-flex justify-between items-center">
          <p className="text-2xl lg:text-4xl mr-1">{t('title')}</p>
        </div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 12} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            {skills.map((item, index) => {
              return (
                <p key={index} className="text-xl">
                  {item}
                </p>
              );
            })}
            {skillsWithBorder.map((item, index) => {
              return <TeacherSkill key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWillTeach;
