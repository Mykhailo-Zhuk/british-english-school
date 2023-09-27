import { useTranslations } from 'next-intl';
import { AspectRatio } from '../../ui/aspect-ratio';
import { TeacherSkill } from '../index';

const OurTeachers = () => {
  const t = useTranslations('our_teachers');

  const skillsLeft = [
    { label: t('professional_label'), description: t('professional_desc') },
    { label: t('experienced_label'), description: t('experienced_desc') },
    {
      label: t('qualified_label'),
      description: t('qualified_desc'),
    },
  ];

  const skillsRight = [
    { label: t('unique_label'), description: t('unique_desc') },
    { label: t('equipped_label'), description: t('equipped_desc') },
    { label: t('universal_label'), description: t('universal_desc') },
  ];

  return (
    <section className="w-full">
      <div className="py-10 px-5 md:py-20 max-w-[1320px] mx-auto flex flex-col space-y-12">
        <h1 className="text-2xl md:text-3xl text-left">{t('our_teacher')}</h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/3 flex flex-col space-y-8">
            {skillsLeft.map((item, index) => {
              const { label, description } = item;

              return <TeacherSkill key={index + 1} label={label} description={description} />;
            })}
          </div>
          <div className="w-full md:w-1/3">
            <AspectRatio ratio={15 / 16} className="bg-accent rounded-lg"></AspectRatio>
          </div>
          <div className="w-full md:w-1/3 flex flex-col space-y-8">
            {skillsRight.map((item, index) => {
              const { label, description } = item;

              return <TeacherSkill key={index + 1} label={label} description={description} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
