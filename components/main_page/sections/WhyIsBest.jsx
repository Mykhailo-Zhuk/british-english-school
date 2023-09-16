const contextInTop = [
  {
    title: 'Великий вибір навчальних програм',
    description:
      'Програма підвищення рівня англійської, розмовна англійська, підготовка до іспитів, підготовка до ЗНО, курси бізнес- та юридичної англійської та інші наші програми',
  },
  {
    title: 'Відпрацювання пропущених занять',
    description:
      'У разі пропуску 3-х і більше занять ми організуємо для вас безкоштовне відпрацювання з викладачем',
  },
  {
    title: 'Контроль прогресу навчання',
    description:
      'Нам важливо, щоб наші курси вивчення англійської мови приносили вам реальні результати. Саме тому ми проводимо тести контролю знань після кожного модулю, а в дитячих та підліткових групах надсилаємо регулярні фідбеки батькам',
  },
];
const contextInMiddle = [
  {
    title: 'Онлайн-кабінет студента',
    description:
      'У вас буде особистий кабінет студента або кабінет батьків, де буде запис класної та домашньої роботи, матеріали до курсу, тести та завдання, фідбек викладача про вашу дитину',
  },
  {
    title: 'Розмовні клуби',
    description:
      'У суботу та неділю ви зможете безкоштовно відвідувати наші спеціалізовані розмовні клуби на різноманітні теми',
  },
  {
    title: 'Кембриджський сертифікат',
    description:
      'Наші студенти мають змогу скласти іспити Cambridge Assessment English безпосередньо у нас у центрі і отримати міжнародний сертифікат для навчання або роботи за кордоном',
  },
];

const contextInEnd = [
  {
    title: 'Онлайн-кабінет студента',
    description:
      'Ви можете сплачувати за навчання поетапно (за кожний модуль) або одразу за весь курс (зі знижкою 10%). Оплату можна вносити готівкою, карткою або безготівковим розрахунком',
  },
  {
    title: 'Персональний менеджер',
    description:
      'З кожним студентом працює персональний менеджер, якому можна поставити будь-яке питання про ваш курс англійської мови',
  },
  {
    title: 'Освітній простір у центрі Києва',
    description:
      'До нас дуже зручно добиратися — ми знаходимось в 5 хвилинах від метро Золоті Ворота',
  },
];

const Context = ({ title, description }) => {
  return (
    <div className="flex flex-col mr-2 w-1/3 space-y-3">
      <h3 className="text-xl">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

const WhyIsBest = () => {
  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] mx-auto flex flex-col space-y-14">
        <h1 className="text-3xl">Чому British School — найкраща школа англійської мови</h1>
        <div className="flex space-x-12">
          {contextInTop.map((text, index) => {
            const { title, description } = text;
            return <Context key={index} title={title} description={description} />;
          })}
        </div>
        <div className="flex space-x-12">
          {contextInMiddle.map((text, index) => {
            const { title, description } = text;
            return <Context key={index} title={title} description={description} />;
          })}
        </div>
        <div className="flex space-x-12">
          {contextInEnd.map((text, index) => {
            const { title, description } = text;
            return <Context key={index} title={title} description={description} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyIsBest;