import React from 'react';

const statistics = [
  { label: '4000+', title: 'студентів за навчальний рік' },
  { label: '70+', title: 'сертифікованих викладачів' },
  { label: '14 років', title: 'навчаємо англійської' },
  { label: 'Ліцензія', title: 'Офіційний підготовчий центр №52374' },
];

const TopStatistic = () => {
  return (
    <div className="statistic-gradient w-full py-4">
      <div className="max-w-[1320px] mx-auto h-36 flex space-x-2">
        {statistics.map((elem) => {
          return (
            <div className="flex flex-col justify-center w-1/4">
              <h2 className="text-4xl text-indigo-400">{elem.label}</h2>
              <p className="text-xl">{elem.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopStatistic;
