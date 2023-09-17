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
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-12">
        <div className="flex px-10 pt-10 space-x-8 bg-[#E9EDFC] rounded-lg">
          <div className="w-1/4">
            <AspectRatio ratio={9 / 6} className="flex items-center justify-center">
              <Image src={images.parents} alt="parents" />
            </AspectRatio>
          </div>
          <div className="w-9/12 flex flex-col space-y-3">
            <h1 className="text-3xl">Регулярна комунікація з батьками</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam modi earum
              tenetur voluptate hic?
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, enim?
            </p>
          </div>
        </div>
        <div className="flex space-x-3 p-2">
          {content.map((item, index) => {
            return (
              <div key={index} className="w-1/3 flex flex-col space-y-4 p-1">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfKidCourse;
