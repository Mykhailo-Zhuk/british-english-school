import Image from 'next/image';
import images from '@/public/images';
import { Button } from '../../ui/button';
import { useTranslations } from 'next-intl';

const TestActionRow = () => {
  const t = useTranslations('test_action');
  return (
    <section className="w-full">
      <div className="mt-20 py-10 md:py-5 px-14 max-w-[1320px] mx-auto h-max md:h-[240px] flex flex-col md:flex-row md:flex-shrink-0 bg-[#E9EDFC] rounded-xl space-y-4">
        <div className="w-full md:w-9/12 lg:w-1/3 px-5 flex items-center">
          <Image src={images.banner_test} width={152} height={200} alt="banner test" />
        </div>
        <div className="w-auto flex flex-col space-y-3 justify-center">
          <h1 className="text-2xl lg:text-3xl">{t('free_test')}</h1>
          <p className="text-lg lg:text-xl">{t('desc')}</p>
        </div>
        <div className="w-full md:w-max flex items-center flex-shrink-0">
          <Button size="lg" className="text-base w-48">
            {t('run_test')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestActionRow;
