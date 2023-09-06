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
      <div className="flex flex-col h-max w-full max-w-[1320px] mx-auto pb-20 space-y-7">
        <div className="flex justify-between">
          <h1 className="text-4xl">Хто вас навчатиме?</h1>
          <Link href="teachers">
            <Button className="w-72 text-[#4A5EAA] bg-[#E9EDFC] text-base hover:text-white">
              Детальніше про викладачів &#707;
            </Button>
          </Link>
        </div>
        <div className="flex space-x-6">
          <div className="w-1/2">
            <AspectRatio ratio={16 / 12} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
          <div className="w-1/2 space-y-4">
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
