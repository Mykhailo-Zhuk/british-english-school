import Image from 'next/image';
import images from '@/public/images';
import { Button } from '../../ui/button';

const TestActionRow = () => {
  return (
    <section className="w-full">
      <div className="mt-20 py-10 md:py-5 px-14 max-w-[1320px] mx-auto h-max md:h-[240px] flex flex-col md:flex-row md:flex-shrink-0 bg-[#E9EDFC] rounded-xl space-y-4">
        <div className="w-full md:w-1/5 px-5">
          <Image src={images.banner_test} width={152} height={200} alt="banner test" />
        </div>
        <div className="w-auto flex flex-col space-y-3 justify-center">
          <h1 className="text-3xl">Безкоштовний онлайн-тест з англійської</h1>
          <p className="text-xl">
            Хочете визначити ваш рівень прямо зараз? Пройдіть наш тест та дізнайтеся, які навчальні
            програми підійдуть саме вам!
          </p>
        </div>
        <div className="w-full md:w-1/5 flex items-center">
          <Button size="lg" className="text-base">
            Пройти тест
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestActionRow;
