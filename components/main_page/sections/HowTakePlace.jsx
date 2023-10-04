import { AspectRatio } from '../../ui/aspect-ratio';
import icons from '@/public/icons';
import images from '@/public/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HowTakePlace = () => {
  const t = useTranslations('how_take_place');

  const list = [
    t('only_english'),
    t('two_times'),
    t('ten_students'),
    t('lessons'),
    t('native_speakers'),
    t('online'),
    t('adaptive'),
    t('reviewed'),
  ];

  return (
    <section className="bg-[#F8F8FA] dark:bg-slate-800 dark:text-slate-400 w-full">
      <div className="py-10 md:py-20 px-5 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-left text-2xl md:text-3xl">{t('title')}</h1>
        <div className="flex flex-col md:flex-row space-y-6 md:space-x-6">
          <ul className="w-full md:w-1/2 flex flex-col space-y-4">
            {list.map((item, index) => {
              return (
                <li key={index} className="relative text-lg md:text-xl py-1 pl-5 flex space-x-2 ">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <Image src={icons.square} width={12} height={12} alt="square" />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className="w-full md:w-1/2">
            <AspectRatio ratio={16 / 10}>
              <Image src={images.first} alt="how take place media" className="rounded-lg" fill />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowTakePlace;
