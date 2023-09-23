import { AspectRatio } from '@/components/ui/aspect-ratio';
import React from 'react';

const context1 = [
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
];
const context2 = [
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
  {
    title: '📕 Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia? Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.',
  },
];

const ListItem = ({ item }) => {
  return (
    <li className="flex flex-col space-y-4 max-h-max">
      <p className="text-base">{item.title}</p>
      <p className="text-base">{item.description}</p>
    </li>
  );
};

const BooksToLearn = () => {
  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-6 px-5">
        <h1 className="text-2xl lg:text-4xl">За якими підручниками навчаємося?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-5 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia?
              Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, deleniti officia?
              Ad deleniti omnis aperiam dicta magnam, perspiciatis dolores quo.
            </p>
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Photo
            </AspectRatio>
          </div>
          <ul className="space-y-6 text-justify">
            {context1?.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
          </ul>
          <ul className="space-y-6 text-justify">
            {context2?.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BooksToLearn;
