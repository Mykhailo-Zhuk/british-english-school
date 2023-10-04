import { useTranslations } from 'next-intl';
import { AspectRatio } from '../../ui/aspect-ratio';
import Image from 'next/image';
import images from '@/public/images';

const FormatOfLearning = ({ kids = false }) => {
  const t = useTranslations('format_of_learning');

  return (
    <section className="w-full dark:bg-slate-800 dark:text-slate-400">
      <div className="py-10 md:py-20 px-5 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-left text-2xl md:text-3xl">{t('title')}</h1>
        {kids && <p className="text-xl md:text-2xl">{t('subtitle')}</p>}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2 flex flex-col space-y-7">
            <h1 className="text-2xl">{t('online')}</h1>
            <AspectRatio ratio={16 / 9}>
              <Image src={images.second} alt="online format media" className="rounded-lg" fill />
            </AspectRatio>
            <p className="text-base text-justify">{t('online_description')}</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col space-y-7">
            <h1 className="text-2xl">{t('offline')}</h1>
            <AspectRatio ratio={16 / 9}>
              <Image src={images.forth} alt="offline format media" className="rounded-lg" fill />
            </AspectRatio>
            <p className="text-base text-justify">{t('offline_description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatOfLearning;
