import { AspectRatio } from '@/components/ui/aspect-ratio';
import images from '@/public/images';
import Image from 'next/image';

const content = [
  {
    title: 'Фідбеки від вчителя',
    description:
      'Індивідуальний фідбек містить інформацію про те, що проходили під час навчання, кількість пропусків, коментарі до виконання домашніх завдань, результати тестів та рекомендації від викладача',
  },
  {
    title: 'Персональний менеджер',
    description:
      "Безпека дітей для нас дуже важлива. Ми зв'яжемося з вами у разі, якщо дитина пропускає заняття без попередження або виходить раніше",
  },
  {
    title: 'Батьківські збори',
    description:
      'Двічі на рік — восени та навесні — ми проводимо батьківські зібрання, на яких наша команда ділиться успіхами у навчанні дітей, і де можна задати питання академічному директору',
  },
];

const BenefitsOfKidCourse = () => {
  return (
    <section className="w-full">
      <div className="py-10 md:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-12 px-5">
        <div className="flex flex-col sm:flex-row py-5 px-5 sm:px-10 space-y-5 sm:space-y-0 sm:space-x-8 bg-[#E9EDFC] rounded-lg">
          <div className="w-full flex items-end justify-center sm:w-1/3">
            <Image src={images.parents} alt="parents" />
          </div>
          <div className="w-full md:w-8/12 flex flex-col space-y-3">
            <h1 className="text-2xl md:text-3xl">Регулярна комунікація з батьками</h1>
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam modi earum
              tenetur voluptate hic?
            </p>
            <p className="text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, enim?
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 p-2">
          {content.map((item, index) => {
            return (
              <div key={index} className="w-full md:w-1/3 flex flex-col space-y-4 p-1">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-base text-justify">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfKidCourse;
