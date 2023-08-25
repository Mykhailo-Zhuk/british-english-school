import React from 'react';
import { Button } from '../ui/button';

const context = [
  {
    id: '1',
    title: 'Заявка',
    description: "Заповніть заявку нижче, і наші менеджери зв'яжуться з вами",
    action: 'Залишити заявку',
    path: 'request',
  },
  {
    id: '2',
    title: 'Тест рівня',
    description: 'Пройдіть наш онлайн-тест на визначення рівня',
    action: 'Пройти тест',
    path: 'test',
  },
  {
    id: '3',
    title: 'Вибір програми',
    description: 'Ми запропонуємо варіанти навчальних програм і підберемо зручний графік занять',
  },
  {
    id: '4',
    title: 'Початок занять',
    description:
      'Ви отримаєте доступ в особистий кабінет, де буде вся інформація про курс та ваш прогрес у навчанні',
  },
];

const HowToSign = () => {
  return (
    <section className="how-to-sign w-full pb-2 pt-20">
      <div className="h-[730px] w-full max-w-[1320px] mx-auto flex flex-col">
        <h1 className="w-[416px] h-28 rounded-full p-5 text-2xl bg-white text-black text-center">
          Як записатися на курси англійської мови?
        </h1>
        <div className="flex space-x-2 overflow-y-auto">
          <div className="w-1/3 mx-2 ">
            <div className="h-full w-full max-h-[580px] max-w-[416px] lg:h-[580px] lg:w-[416px] bg-indigo-100 rounded-xl" />
          </div>
          <div className="flex flex-wrap w-2/3 items-center justify-center">
            {context.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="w-[416px] h-[244px] px-6 pt-6 pb-10 bg-white rounded-lg lg:odd:mr-6 my-3 flex flex-col space-y-2">
                  <div className="flex space-x-2 justify-start max-h-16 h-full">
                    <div className="w-16 h-16 rounded-full how-to-sign-card  border-[7px] border-transparent flex justify-center items-center">
                      <div className="bg-[#FAF4F8] w-12 h-12 text-black text-2xl flex justify-center items-center rounded-full">
                        {elem.id}
                      </div>
                    </div>
                    <h3 className="text-2xl py-4">{elem.title}</h3>
                  </div>
                  <p className="text-xl">{elem.description}</p>
                  {elem.action && (
                    <div>
                      <Button className="text-base">{elem.action}</Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSign;
