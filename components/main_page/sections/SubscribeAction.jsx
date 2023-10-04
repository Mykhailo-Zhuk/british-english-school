import React from 'react';
import { SubscribeInput } from '../index';
import { useTranslations } from 'next-intl';

const SubscribeAction = () => {
  const t = useTranslations('subscribe');

  return (
    <section className="w-full dark:text-slate-400">
      <div className="mt-10 md:mt-20 lg:mt-0 py-5 md:py-12 px-5 md:px-10 lg:px-12 max-w-[1320px] mx-auto h-max md:h-[200px] md:space-x-7 flex flex-col md:flex-row flex-shrink-0 bg-gradient-to-r from-[#cf5657] to-[#8b3d70] dark:from-slate-700 dark:to-slate-800 rounded-xl">
        <div className="w-full md:w-2/5 space-y-4 text-white dark:text-slate-400 flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left">{t('title')}</h1>
          <p className="text-sm">{t('subtitle')}</p>
        </div>
        <div className="w-full md:w-3/5 flex items-center">
          <SubscribeInput />
        </div>
      </div>
    </section>
  );
};

export default SubscribeAction;
