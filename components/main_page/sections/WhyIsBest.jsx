import { useTranslations } from 'next-intl';

const Context = ({ title, description }) => {
  return (
    <div className="flex flex-col md:mr-6 w-full md:w-1/3 space-y-3">
      <h3 className="text-xl">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

const WhyIsBest = () => {
  const t = useTranslations('why_is_best');

  const context = [
    {
      title: t('program'),
      description: t('program_desc'),
    },
    {
      title: t('missed_classes'),
      description: t('missed_classes_desc'),
    },
    {
      title: t('control'),
      description: t('control_desc'),
    },
    {
      title: t('speaking_club'),
      description: t('speaking_club_desc'),
    },
    {
      title: t('menager'),
      description: t('menager_desc'),
    },
    {
      title: t('space'),
      description: t('space_desc'),
    },
  ];
  return (
    <section className="w-full">
      <div className="py-10 md:py-20 px-5 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-2xl md:text-3xl">{t('title')}</h1>
        <div className="flex md:justify-evenly flex-wrap space-y-6 text-justify">
          {context.map((text, index) => {
            const { title, description } = text;
            return <Context key={index} title={title} description={description} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIsBest;
