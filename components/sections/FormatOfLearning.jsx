import { AspectRatio } from '../ui/aspect-ratio';

const FormatOfLearning = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-left text-3xl">Курси з англійської мови за 2 форматами</h1>
        <div className="flex space-x-6">
          <div className="w-1/2 flex flex-col space-y-7">
            <h1 className="text-2xl">Онлайн</h1>
            <AspectRatio ratio={16 / 9} className="bg-indigo-100 rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">
              Заняття в онлайн-групах проходять у форматі Zoom конференцій за постійним посиланням,
              що діє для вашої групи
            </p>
          </div>
          <div className="w-1/2 flex flex-col space-y-7">
            <h1 className="text-2xl">Оффлайн</h1>
            <AspectRatio ratio={16 / 9} className="bg-indigo-100 rounded-lg">
              Video
            </AspectRatio>
            <p className="text-base">
              Якщо ви бажаєте відвідувати курси англійської мови в Києві, запрошуємо до нас в центр
              за адресою вул. Ярославів Вал, 13/2-б
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatOfLearning;
