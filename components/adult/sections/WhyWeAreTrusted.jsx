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
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Чому нам довіряють</h1>
        <div className="flex flex-wrap">
          {contentToRender?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col space-y-2 p-5 w-1/4">
                {item?.value ? (
                  <p className="text-4xl">{item?.value}</p>
                ) : (
                  <Image src={item?.icon} alt="icon" width={40} height={40} />
                )}
                <p className="text-xl">{item?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreTrusted;
