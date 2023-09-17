const statistics = [
  { label: '4000+', title: 'студентів за навчальний рік' },
  { label: '70+', title: 'сертифікованих викладачів' },
  { label: '14 років', title: 'навчаємо англійської' },
  { label: 'Ліцензія', title: 'Офіційний підготовчий центр №52374' },
];

const TopStatistic = () => {
  return (
    <section className="statistic-gradient w-full">
      <div className="py-20 px-5 max-w-[1320px] mx-auto h-max md:h-36 flex flex-col space-y-6 md:flex-row md:space-x-2">
        {statistics?.map((elem, index) => {
          return (
            <div key={index} className="flex flex-col justify-center w-full md:w-1/4">
              <h2 className="text-4xl text-indigo-400">{elem?.label}</h2>
              <p className="text-xl">{elem?.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopStatistic;
