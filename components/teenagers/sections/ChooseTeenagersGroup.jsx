import Link from 'next/link';
import React from 'react';
import { Button } from '../../ui/button';
import { AspectRatio } from '../../ui/aspect-ratio';
import { ContactForm } from '@/components/features';

const ChooseTeenagersGroup = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p>Англійська для підлітків та школярів</p>
        </div>
        <h1 className="text-4xl">Англійська для підлітків та школярів</h1>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-5 w-1/2">
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quidem asperiores
              veritatis vel rem cumque nam amet totam iure quisquam?
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores labore porro
              sapiente natus id odio dolore cum? Totam, harum.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque incidunt
              ex saepe iste recusandae corporis totam? Totam, temporibus cumque, possimus voluptatum
              non nulla beatae laboriosam blanditiis, tenetur natus consectetur.
            </p>
            <ContactForm />
          </div>
          <div className="w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Photo
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseTeenagersGroup;
