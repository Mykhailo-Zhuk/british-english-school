import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const skills = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sapiente eum vel minima recusandae in vitae omnis nesciunt quis accusantium.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sunt, architecto neque sed maxime necessitatibus quaerat ratione accusantium, tempore sequi enim tenetur porro quod! Quas ratione voluptate corrupti aliquid minima.',
];

const skillsWithBorder = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas sapiente eum vel minima recusandae in vitae omnis nesciunt quis accusantium.',
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut enim explicabo eum commodi dolorem tempore modi, impedit eos velit eveniet corporis rem non, porro molestiae autem. Non vero repudiandae fuga! Assumenda facilis fuga culpa explicabo id distinctio maiores vero neque!',
];

const TeacherSkill = ({ item }) => {
  return (
    <div className="relative w-full h-max min-h-[96px] flex-shrink-0 teachers-skills-border rounded-lg p-5 z-10">
      <p className="text-base py-1 text-black">{item}</p>
      <div className="absolute inset-1 bg-white rounded-lg -z-10" />
    </div>
  );
};

const WhoWillTeach = () => {
  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 flex flex-col h-max w-full max-w-[1320px] mx-auto space-y-7 px-5">
        <div className="h-max inline-flex justify-between items-center">
          <p className="text-2xl lg:text-4xl mr-1">Хто вас навчатиме?</p>
        </div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 12} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            {skills.map((item, index) => {
              return (
                <p key={index} className="text-xl">
                  {item}
                </p>
              );
            })}
            {skillsWithBorder.map((item, index) => {
              return <TeacherSkill key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWillTeach;
