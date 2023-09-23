import React from 'react';
import icons from '@/public/icons/adult';
import Image from 'next/image';

const contentToRender = [
  {
    value: '4000+',
    description: 'студентів пройшли навчання за рік',
  },
  {
    value: '80+',
    description: 'кваліфікованих викладачів',
  },
  {
    value: '14 років',
    description: 'успішно навчаємо англійській мові',
  },
  {
    value: '25',
    description: 'навчальних програм для різних цілей і рівнів',
  },
  {
    icon: icons.people,
    description: 'Підготовчий центр Cambridge English',
  },
  {
    icon: icons.document,
    description: 'Строгий контроль якості навчання',
  },
  {
    icon: icons.web,
    description: 'Міжнародні стандарти навчання',
  },
  {
    icon: icons.chat,
    description: 'Персональний менеджер у кожного студента',
  },
];

const WhyWeAreTrusted = () => {
  return (
    <section className="w-full bg-accent">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl text-center lg:text-left">Чому нам довіряють</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {contentToRender?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start space-y-2 p-5 w-full md:w-1/3">
                {item?.value ? (
                  <p className="text-4xl text-center lg:text-left">{item?.value}</p>
                ) : (
                  <Image src={item?.icon} alt="icon" width={40} height={40} />
                )}
                <p className="text-xl text-center lg:text-left">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreTrusted;
