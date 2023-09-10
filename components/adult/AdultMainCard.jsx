'use client';

import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

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

  return (
    <div className="relative w-[410px] h-max flex flex-col space-y-4 odd:mr-4 mb-4 rounded-md bg-white py-7 px-12 text-sm">
      {due && (
        <div className="absolute top-0 right-0 w-max px-5 py-1 due_card text-white">{due}</div>
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
        <p>Викладач {teacher.name}</p>
        <p>{start_date.title}</p>
      </div>
      <div className="text-left px-4 py-1 bg-[#EBF7F6] border-l-4 border-[#36A8A0] rounded-sm">
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
          <p>за 60 хв</p>
          <p>{price_per_hour} грн</p>
        </div>
      )}
      {price_per_module && (
        <div className="flex justify-between w-3/4">
          <p>за модуль</p>
          <p className="text-xl">{price_per_module} грн</p>
        </div>
      )}
      <Separator className="mt-10" />
      <Button variant="ghost" className="text-xl text-[#8F3F6F]">
        Записатись
      </Button>
    </div>
  );
};

export default AdultMainCard;
