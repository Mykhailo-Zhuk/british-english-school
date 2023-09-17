export const kidsListWithFilter = {
  filter: {
    type: [
      { label: 'Англійська для дітей 6–10 років', value: 'six-ten_years' },
      { label: 'Англійська для дітей 11–12 років', value: 'eleven-twelve_years' },
      {
        label: 'Літній експрес-курс англійської для дітей 6-10 років',
        value: 'express',
      },
      { label: 'Літній експрес-курс англійської для дітей 11–12 років', value: 'summer_express' },
    ],
    program: [
      { id: 's1', label: 'Step 1' },
      { id: 's2', label: 'Step 2' },
      { id: 's3', label: 'Step 3' },
      { id: 's4', label: 'Step 4' },
      { id: 's5', label: 'Step 5' },
      { id: 's5+', label: 'Step 5 Plus' },
    ],
    format: [
      { id: 'online', label: 'Онлайн' },
      { id: 'offline', label: 'Офлайн' },
    ],
    time: [
      { id: 'morning', label: 'Ранкові групи' },
      { id: 'day', label: 'Денні групи' },
      { id: 'evening', label: 'Вечірні групи' },
    ],
    teacher: [
      { id: '1', label: 'Юлія Маковій' },
      { id: '2', label: 'Марія Антонова' },
      { id: '3', label: 'Вікторія Щербакова' },
      { id: '4', label: 'Валерія Гуменюк' },
      { id: '5', label: 'Юлія Проніна' },
      { id: '6', label: 'Інна Тарахан' },
      { id: '7', label: 'Олексій Станіславський' },
      { id: '8', label: 'Анна Горішна' },
      { id: '9', label: 'Оксана Деркач' },
    ],
  },
  courses: [
    {
      id: '1',
      format: { title: 'Онлайн', id: 'online' },
      due: 'Залишилось 2 місця',
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 1', id: 's1' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Юлія Маковій', id: '1' },
      start_date: { title: 'Початок занять 4 вересня', date: '04.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '20:10', end_time: '21:40' },
        { day: 'Середа', start_time: '20:10', end_time: '21:40' },
        { day: "П'ятниця", start_time: '20:10', end_time: '21:40' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '251',
      price_per_module: '6799',
    },
    {
      id: '2',
      format: { title: 'Онлайн', id: 'online' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 2', id: 's2' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Марія Антонова', id: '2' },
      start_date: { title: 'Початок занять 4 вересня', date: '04.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Вівторок', start_time: '18:30', end_time: '20:00' },
        { day: 'Четвер', start_time: '18:30', end_time: '20:00' },
        { day: 'Субота', start_time: '14:00', end_time: '15:30' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '251',
      price_per_module: '6799',
    },
    {
      id: '3',
      format: { title: 'Офлайн', id: 'offline' },
      due: 'Залишилось 2 місця',
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 3', id: 's3' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Вікторія Щербакова', id: '3' },
      start_date: { title: 'Початок занять 12 вересня', date: '12.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '20:10', end_time: '21:40' },
        { day: 'Середа', start_time: '20:10', end_time: '21:40' },
        { day: "П'ятниця", start_time: '20:10', end_time: '21:40' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '266',
      price_per_module: '7199',
    },
    {
      id: '4',
      format: { title: 'Офлайн', id: 'offline' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 4', id: 's4' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Валерія Гуменюк', id: '4' },
      start_date: { title: 'Початок занять 12 вересня', date: '12.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Вівторок', start_time: '20:10', end_time: '21:40' },
        { day: 'Четвер', start_time: '20:10', end_time: '21:40' },
        { day: 'Субота', start_time: '12:10', end_time: '13:40' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '266',
      price_per_module: '7199',
    },
    {
      id: '5',
      format: { title: 'Онлайн', id: 'online' },
      due: 'Залишилось 3 місця',
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 1', id: 's1' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Юлія Проніна', id: '5' },
      start_date: { title: 'Початок занять 11 вересня', date: '11.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '18:30', end_time: '20:00' },
        { day: 'Середа', start_time: '18:30', end_time: '20:00' },
        { day: "П'ятниця", start_time: '18:30', end_time: '20:00' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '251',
      price_per_module: '6799',
    },
    {
      id: '6',
      format: { title: 'Офлайн', id: 'offline' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 2', id: 's2' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Інна Тарахан', id: '6' },
      start_date: { title: 'Початок занять 11 вересня', date: '11.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '10:40', end_time: '12:10' },
        { day: 'Середа', start_time: '10:40', end_time: '12:10' },
        { day: "П'ятниця", start_time: '10:40', end_time: '12:10' },
      ],
      time_of_holding: { title: 'Ранкова група', time: 'morning' },
      price_per_hour: '251',
      price_per_module: '6799',
    },
    {
      id: '7',
      format: { title: 'Онлайн', id: 'online' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 3', id: 's3' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Олексій Станіславський', id: '7' },
      start_date: { title: 'Початок занять 25 вересня', date: '25.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '10:40', end_time: '12:10' },
        { day: 'Середа', start_time: '10:40', end_time: '12:10' },
        { day: "П'ятниця", start_time: '10:40', end_time: '12:10' },
      ],
      time_of_holding: { title: 'Ранкова група', time: 'morning' },
      price_per_hour: null,
      price_per_module: null,
    },
    {
      id: '8',
      format: { title: 'Онлайн', id: 'online' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 2', id: 's2' },
      description: { title: '3 модулі по 12 занять', modules: '3', lessons: '12' },
      teacher: { name: 'Анна Горішна', id: '8' },
      start_date: { title: 'Початок занять 12 вересня', date: '12.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Вівторок', start_time: '09:00', end_time: '11:15' },
        { day: 'Четвер', start_time: '09:00', end_time: '11:15' },
      ],
      time_of_holding: { title: 'Вечірня група', time: 'evening' },
      price_per_hour: '229',
      price_per_module: '6199',
    },
    {
      id: '9',
      format: { title: 'Онлайн', id: 'online' },
      due: null,
      type: { title: 'Англійська для дітей 6–10 років', id: 'level' },
      program: { title: 'Step 5 Plus', id: 's5+' },
      description: { title: '3 модулі по 18 занять', modules: '3', lessons: '18' },
      teacher: { name: 'Оксана Деркач', id: '9' },
      start_date: { title: 'Початок занять 4 вересня', date: '04.09.2023' },
      label: 'Набір на модуль 1',
      duration_per_week: [
        { day: 'Понеділок', start_time: '10:40', end_time: '12:10' },
        { day: 'Середа', start_time: '10:40', end_time: '12:10' },
        { day: "П'ятниця", start_time: '10:40', end_time: '12:10' },
      ],
      time_of_holding: { title: 'Ранкова група', time: 'morning' },
      price_per_hour: '229',
      price_per_module: '6199',
    },
  ],
};
