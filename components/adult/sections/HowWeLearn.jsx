import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

const HowWeLearn = () => {
  return (
    <section className="w-full how-we-learn">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6">
        <h1 className="text-4xl">Як ми навчаємо англійській мові?</h1>
        <div className="flex space-x-24">
          <div className="w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
          <div className="w-1/2 flex flex-col space-y-5">
            <h3 className="text-xl">Заняття тільки англійською мовою</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur natus eligendi
              ipsa sapiente aperiam quos illo, ullam, optio fuga nam quas! Eligendi officiis in
              asperiores voluptas vitae voluptates debitis aperiam!
            </p>
            <h3 className="text-xl">Різні методики навчання</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi quisquam
              adipisci hic id? Eos voluptas expedita porro dolores hic. Dolorem esse dicta repellat
              quibusdam delectus atque similique cum praesentium!
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum beatae tempora a ut quo
          nemo veniam nulla consectetur non, qui possimus voluptates ad adipisci, quam ipsam fugit,
          rem sequi necessitatibus nihil veritatis voluptatum quisquam? Doloremque ullam sint
          necessitatibus commodi. Consequatur?
        </div>
      </div>
    </section>
  );
};

export default HowWeLearn;
