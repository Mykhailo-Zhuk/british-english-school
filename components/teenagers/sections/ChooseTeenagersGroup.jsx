import Link from 'next/link';
import React from 'react';
import { AspectRatio } from '../../ui/aspect-ratio';
import { ContactForm } from '@/components/features';

const ChooseTeenagersGroup = () => {
  return (
    <section className="w-full">
      <div className="pt-20 pb-10 lg:pb-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <div className="flex w-full space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p className="truncate" title="Англійська для підлітків та школярів">
            Англійська для підлітків та школярів
          </p>
        </div>
        <h1 className="text-2xl lg:text-4xl">Англійська для підлітків та школярів</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
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
          <div className="w-full lg:w-1/2">
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
