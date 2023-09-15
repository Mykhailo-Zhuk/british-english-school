import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

const benefits = [
  {
    title: 'Батьки отримують фідбек',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti natus nemo dignissimos asperiores quos. Pariatur?',
  },
  {
    title: 'Враховуємо вікові особливості',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti natus nemo dignissimos asperiores quos. Pariatur?',
  },
  {
    title: 'Зручний розклад',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti natus nemo dignissimos asperiores quos. Pariatur?',
  },
  {
    title: 'Безкоштовні розмовні та граматичні клуби',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti natus nemo dignissimos asperiores quos. Pariatur?',
  },
];

const types = [
  'Pre Intermediate: A2 Key (KET)',
  'Intermediate: B1 Preliminary (PET)',
  'Upper Intermediate: B2 First (FCE)',
  'Advanced: C1 Advanced (CAE)',
];

const ProgramDescription = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Програма для підлітків та школярів (13–17 років)</h1>
        <div className="flex space-x-20">
          <div className="w-1/2 space-y-3">
            <h2 className="text-2xl">
              Новий рівень + підготовка до Кембриджських іспитів згідно рівня:
            </h2>
            <ul className="space-y-1">
              {types.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <span className="mx-1 text-[10px]">⬤</span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="flex space-x-3">
              <div className="flex flex-col space-y-3 items-center p-5">
                <div className="rounded-full w-36 h-36 program_duration flex flex-col items-center justify-center leading-none text-white p-5">
                  <p className="text-[90px]">9</p>
                  <p className="text-xl">місяців</p>
                </div>
                <p className="text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, consequuntur autem.
                </p>
              </div>
              <p className="text-base max-w-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptas aut
                reiciendis dolores odit voluptates eos eligendi quibusdam voluptatem rem. Sapiente,
                voluptas aut reiciendis dolores odit voluptates eos eligendi quibusdam voluptatem
                rem.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <AspectRatio ratio={16 / 9} className="rounded-sm bg-accent ">
              Video
            </AspectRatio>
          </div>
        </div>
        <ul className="flex space-x-2">
          {benefits.map((item, index) => {
            return (
              <li key={index} className="flex flex-col space-y-3">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-base">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProgramDescription;
