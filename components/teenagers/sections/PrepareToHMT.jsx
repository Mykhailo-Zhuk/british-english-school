'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useTranslations } from 'next-intl';

const PrepareToHMT = () => {
  const t = useTranslations('prepare_to_hmt');

  const content = [
    { question: t('first_question'), answer: t('first_answer') },
    { question: t('second_question'), answer: t('second_answer') },
    { question: t('third_question'), answer: t('third_answer') },
    {
      question: t('forth_question'),
      answer: t('forth_answer'),
    },
    {
      question: t('fifth_question'),
      answer: t('fifth_answer'),
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 ld:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-20 pb-10">
          <div className="w-full lg:w-3/5 flex flex-col space-y-2">
            <p className="text-2xl max-w-lg">{t('first_desc')}</p>
            <p className="text-2xl max-w-lg">{t('second_desc')}</p>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-left">
            <p className="text-xl max-w-md pl-5 border-l-4 border-l-[#A14669]">{t('third_desc')}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
          <div className="w-full lg:w-3/5">
            <ul>
              {content.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="w-full inline-grid grid-cols-2 py-10 border-b border-b-[#CFCFDC]">
                    <span className="text-xl lg:text-2xl">{item.question}</span>
                    <span className="text-base max-w-xs text-left">{item.answer}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <AspectRatio ratio={9 / 6} className="bg-accent rounded-lg"></AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareToHMT;
