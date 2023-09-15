import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

const content = [
  { question: 'Як проходять заняття?', answer: '1 раз на тиждень по 90 хвилин' },
  { question: 'У якому форматі?', answer: 'Онлайн та офлайн' },
  { question: 'Скільки студентів у групі?', answer: 'До 12 (онлайн) та до 10 (офлайн)' },
  {
    question: 'Який рівень?',
    answer: 'B1 (Pre Intermediate), B1+ (Intermediate), B2 (Upper Intermediate)',
  },
  {
    question: 'Як вчитися?',
    answer: 'Курс можна проходити як окремо, так і паралельно з курсом англійської для підлітків',
  },
];

const PrepareToHMT = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Підготовка до НМТ</h1>
        <div className="flex space-x-20 pb-10">
          <div className="w-3/5 flex flex-col space-y-2">
            <p className="text-2xl max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio adipisci,
              impedit, asperiores eius incidunt magni, ea quasi itaque aliquid iusto debitis.
            </p>
            <p className="text-2xl max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque optio adipisci,
              impedit, asperiores eius incidunt magni, ea quasi itaque aliquid iusto debitis.
            </p>
          </div>
          <div className="w-2/5 flex items-center justify-left">
            <p className="text-xl max-w-md pl-5 border-l-4 border-l-[#A14669]">
              Цей курс розраховано на ґрунтовну підготовку до НМТ, він включає в себе детальний
              розбір структури іспиту, усіх типів завдань, пропрацювання навичок, необхідних для
              успішного складання НМТ з англійської мови.
            </p>
          </div>
        </div>
        <div className="flex space-x-20">
          <div className="w-3/5">
            <ul>
              {content.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="w-full inline-grid grid-cols-2 py-10 border-b border-b-[#CFCFDC]">
                    <span className="text-2xl">{item.question}</span>
                    <span className="text-base max-w-xs text-left">{item.answer}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-2/5 flex items-center justify-center">
            <AspectRatio ratio={9 / 6} className="bg-accent rounded-lg"></AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareToHMT;
