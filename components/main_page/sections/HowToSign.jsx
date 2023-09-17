import { Button } from '../../ui/button';

const HowToSign = ({ kids = false }) => {
  const context = [
    {
      id: '1',
      title: 'Заявка',
      description: [
        "Заповніть заявку нижче, і наші менеджери зв'яжуться з вами",
        kids && 'Ми розповімо, як проходить навчання, і відповімо на всі ваші запитання.',
      ],
      action: 'Залишити заявку',
      path: 'request',
    },
    {
      id: '2',
      title: 'Тест рівня',
      description: [
        !kids && 'Пройдіть наш онлайн-тест на визначення рівня',
        kids && 'Дітей 6–10 років тестують викладачі, дату та час узгоджуємо при консультації.',
        kids && 'Діти 11–12 років можуть пройти тестування онлайн:',
      ],
      action: kids ? 'Визначення рівня' : 'Пройти тест',
      path: kids ? 'kids/test' : 'test',
    },
    {
      id: '3',
      title: kids ? 'Вибір курсу' : 'Вибір програми',
      description: [
        kids
          ? 'Наші менеджери допоможуть підібрати найкращий курс для вашої дитини.'
          : 'Ми запропонуємо варіанти навчальних програм і підберемо зручний графік занять',
      ],
    },
    {
      id: '4',
      title: kids ? 'Навчання' : 'Початок занять',
      description: [
        kids
          ? 'Залишилося зачекати дати початку курсу, і дитина може починати навчання!'
          : 'Ви отримаєте доступ в особистий кабінет, де буде вся інформація про курс та ваш прогрес у навчанні',
      ],
    },
  ];

  return (
    <section className="how-to-sign w-full">
      <div className="py-20 h-max w-full max-w-[1320px] mx-auto flex flex-col">
        <h1 className="w-1/3 h-28 rounded-full p-5 text-2xl bg-accent text-black text-center">
          {kids ? 'Як записати дитину на англійську?' : 'Як записатися на курси англійської мови?'}
        </h1>
        <div className="flex space-x-4">
          <div className="w-1/3 mx-2">
            <div className="h-full bg-accent rounded-xl" />
          </div>
          <div className="flex flex-wrap w-4/6 items-center justify-center">
            {context.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="w-[48%] h-max px-6 pt-6 pb-10 bg-accent rounded-lg lg:odd:mr-6 my-3 flex flex-col space-y-2">
                  <div className="flex space-x-2 justify-start max-h-16 h-full">
                    <div className="w-16 h-16 rounded-full how-to-sign-card  border-[7px] border-transparent flex justify-center items-center">
                      <div className="bg-[#FAF4F8] w-12 h-12 text-black text-2xl flex justify-center items-center rounded-full">
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

                  {elem.action && <Button className="text-base float-left">{elem.action}</Button>}
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
