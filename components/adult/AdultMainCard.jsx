'use client';

import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { useTranslations } from 'next-intl';

const AdultMainCard = ({ course }) => {
  const {
    format,
    due,
    type,
    program,
    description,
    teacher,
    start_date,
    label,
    duration_per_week,
    price_per_hour,
    price_per_module,
  } = course;

  const t = useTranslations('courses_list');

  return (
    <div className="relative w-full max-w-[410px] h-max flex flex-col space-y-4 lg:odd:mr-4 mb-4 rounded-md bg-white dark:bg-slate-700 py-3 md:py-7 px-3 md:px-7 lg:px-12 text-sm">
      {due && (
        <div className="absolute top-0 right-0 w-max px-5 py-1 bg-gradient-to-r from-[#cf5657] to-[#ee7b40] rounded-tl-none rounded-tr-sm rounded-br-none rounded-bl-2xl text-white dark:from-slate-700 dark:to-slate-800 dark:text-slate-400">
          {due}
        </div>
      )}
      <p className="text-base text-left">
        <span className={`${format.id === 'online' ? 'text-[#4295F3]' : 'text-[#A14669]'} mr-2`}>
          ⬤
        </span>
        {format.title}
      </p>
      <p className="text-[#8F3F6F] text-base text-left">{type.title}</p>
      <h1 className="text-2xl text-left my-2">{program.title}</h1>
      <div className="flex flex-col text-left">
        <p>{description.title}</p>
        <p>
          {t('teacher')} {teacher.name}
        </p>
        <p>{start_date.title}</p>
      </div>
      <div className="text-left px-4 py-1 bg-[#EBF7F6] dark:border-green-900 dark:bg-slate-600 border-l-4 border-[#36A8A0] rounded-sm">
        <p>{label}</p>
      </div>
      <div className="flex flex-col">
        {duration_per_week?.map((d, i) => {
          return (
            <div key={i} className="flex justify-between w-3/4">
              <p>{d.day}</p>
              <p>
                {d.start_time}—{d.end_time}
              </p>
            </div>
          );
        })}
      </div>
      {price_per_hour && <Separator />}
      {price_per_hour && (
        <div className="flex justify-between w-3/4">
          <p>{t('minutes')}</p>
          <p>
            {price_per_hour} {t('currency')}
          </p>
        </div>
      )}
      {price_per_module && (
        <div className="flex justify-between w-3/4">
          <p>{t('module')}</p>
          <p className="text-xl">
            {price_per_module} {t('currency')}
          </p>
        </div>
      )}
      <Separator className="mt-10" />
      <Button
        variant="ghost"
        className="text-xl text-[#8F3F6F] dark:hover:bg-slate-800 dark:hover:text-slate-400">
        {t('appointment')}
      </Button>
    </div>
  );
};

export default AdultMainCard;
