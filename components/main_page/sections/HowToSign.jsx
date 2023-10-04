import { useTranslations } from 'next-intl';
import { Button } from '../../ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import images from '@/public/images';

const HowToSign = ({ kids = false }) => {
  const t = useTranslations('how_to_sign');

  const context = [
    {
      id: '1',
      title: t('first.title'),
      description: [t('first.description'), kids && t('first.description_kids')],
      action: t('first.action'),
      path: 'request',
    },
    {
      id: '2',
      title: t('second.title'),
      description: [
        !kids && t('second.description'),
        kids && t('second.description_one'),
        kids && t('second.description_two'),
      ],
      action: kids ? t('second.action_kids') : t('second.action'),
      path: kids ? 'kids/test' : 'test',
    },
    {
      id: '3',
      title: kids ? t('third.action_kids') : t('third.action'),
      description: [kids ? t('third.description_kids') : t('third.description')],
    },
    {
      id: '4',
      title: kids ? t('fourth.action_kids') : t('fourth.action'),
      description: [kids ? t('fourth.description_kids') : t('fourth.description')],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#dfeafd] to-[#fbebef] dark:from-slate-700 dark:to-slate-800 w-full">
      <div className="py-10 lg:py-20 h-max w-full max-w-[1320px] mx-auto flex flex-col">
        <h1 className="w-full md:w-1/2 rounded-full p-5 text-2xl bg-accent text-black dark:bg-slate-700 dark:text-slate-400 text-center">
          {kids ? t('how_to_sign_kids') : t('how_to_sign')}
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="w-full lg:1/2 xl:w-2/5 lg:mx-5 mt-3">
            <AspectRatio ratio={16 / 9}>
              <Image src={images.first} alt="how to sign" className="rounded-lg" />
            </AspectRatio>
          </div>
          <div className="flex flex-col xl:flex-row xl:flex-wrap w-full lg:1/2 xl:w-3/5 items-center justify-center px-5">
            {context.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="w-full xl:w-[48%] h-max px-6 pt-6 pb-10 bg-accent dark:bg-slate-700 dark:text-slate-400 rounded-lg xl:odd:mr-6 my-3 flex flex-col space-y-2">
                  <div className="flex space-x-2 justify-start max-h-16 h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#dfeafd] to-[#fbebef]  border-[7px] border-transparent flex justify-center items-center">
                      <div className="bg-[#FAF4F8] w-12 h-12 text-black dark:bg-slate-700 dark:text-slate-400 text-2xl flex justify-center items-center rounded-full">
                        {elem.id}
                      </div>
                    </div>
                    <h3 className="text-2xl py-4">{elem.title}</h3>
                  </div>
                  {elem.description.map((item, index) => {
                    return (
                      <p key={index} className="text-xl">
                        {item}
                      </p>
                    );
                  })}

                  {elem.action && (
                    <Button className="text-base float-left dark:bg-slate-800 dark:text-slate-400">
                      {elem.action}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSign;
