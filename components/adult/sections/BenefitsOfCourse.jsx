import React from 'react';
import icons from '@/public/icons';
import Image from 'next/image';
import images from '@/public/images';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const context1 = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi.',
];

const BenefitsOfCourse = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-10">
        <h1 className="text-4xl">Переваги навчання у нас</h1>
        <div className="grid grid-cols-3">
          <ul className="space-y-10 mt-5 mr-5">
            {context1?.map((item, index) => {
              return (
                <li key={index} className="relative text-xl py-1 pl-5 mr-4 mt-4 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="space-y-10">
            {context1?.map((item, index) => {
              return (
                <li key={index} className="relative text-xl py-1 pl-5 mr-4 mt-4 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <div className="p-6 w-96 h-96 bg-[#E9EDFC] flex flex-col space-y-2 items-center rounded-lg">
              <p className="text-xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consectetur
                voluptatibus alias accusamus nostrum soluta.
              </p>
              <Image src={images.memoji} width={200} height={178} alt="memoji" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col space-y-8 bg-white rounded-lg mt-5 p-8">
            <h1 className="text-4xl">Онлайн</h1>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-col space-y-8 bg-white rounded-lg mt-5 p-8">
            <h1 className="text-4xl">Офлайн</h1>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfCourse;
