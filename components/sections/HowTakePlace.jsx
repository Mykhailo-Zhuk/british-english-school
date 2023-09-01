import { AspectRatio } from '../ui/aspect-ratio';
import icons from '@/public/icons';
import Image from 'next/image';

const list = [
  'Лише англійською',
  '2–3 рази на тиждень',
  'У групі 8 чи 10 студентів',
  'Заняття 90, 135 чи 180 хв',
  'Українські викладачі та носії мови',
  'Онлайн через Zoom або офлайн в нашому центрі',
  'Програми адаптовані під вік та цілі студентів',
  'За перевіреними підручниками та авторськими матеріалами',
];

const HowTakePlace = () => {
  return (
    <section className="bg-[#F8F8FA] w-full">
      <div className="py-20 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-left text-3xl">Як проходять заняття в нашій школі англійської мови</h1>
        <div className="flex space-x-6">
          <ul className="w-1/2 flex flex-col space-y-4">
            {list.map((item, index) => {
              return (
                <li key={item + index} className="relative text-xl py-1 pl-5 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="w-1/2">
            <AspectRatio ratio={16 / 10} className="bg-indigo-100 rounded-lg">
              Photo
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTakePlace;
