'use client';

import { useTranslations } from 'next-intl';

const TopStatistic = () => {
  const t = useTranslations('top_statistic');

  const statistics = [
    { label: '4000+', title: t('students') },
    { label: '70+', title: t('teachers') },
    { label: t('duration_item'), title: t('duration') },
    { label: t('license'), title: t('license_source') },
  ];

  return (
    <section className="bg-gradient-to-r from-[#eff5fe] to-[#fcf5f7] dark:from-slate-700 dark:to-slate-800 w-full">
      <div className="py-20 px-5 max-w-[1320px] mx-auto h-max flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-2  dark:text-slate-400">
        {statistics?.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center md:justify-start w-full md:w-1/4">
              <h2 className="text-4xl text-indigo-400">{elem?.label}</h2>
              <p className="text-xl">{elem?.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopStatistic;
