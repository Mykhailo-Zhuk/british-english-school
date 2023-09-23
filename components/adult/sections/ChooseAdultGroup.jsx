import Link from 'next/link';
import React from 'react';
import { Button } from '../../ui/button';
import { AspectRatio } from '../../ui/aspect-ratio';

const ChooseAdultGroup = () => {
  return (
    <section className="w-full">
      <div className="pt-20 pb-10 lg:pb-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <div className="flex w-max space-x-4 text-sm text-[#A7A7A7]">
          <Link href="/">Головна</Link> <span className="mx-1">&#707;</span>
          <p>Англійська дорослим</p>
        </div>
        <h1 className="text-2xl lg:text-4xl">Англійська для дорослих</h1>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="flex flex-col space-y-5 w-full md:w-1/2 text-xl text-justify">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quidem asperiores
              veritatis vel rem cumque nam amet totam iure quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores labore porro
              sapiente natus id odio dolore cum? Totam, harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque incidunt
              ex saepe iste recusandae corporis totam? Totam, temporibus cumque, possimus voluptatum
              non nulla beatae laboriosam blanditiis, tenetur natus consectetur.
            </p>
            <Button
              type="submit"
              size="lg"
              className="text-lg text-white bg-[#A14669] h-16 w-52 float-left">
              Підібрати групу
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAdultGroup;
