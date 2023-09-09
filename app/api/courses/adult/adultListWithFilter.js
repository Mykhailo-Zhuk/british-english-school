export const adultListWithFilter = {
  filter: {
    type: [
      { label: 'Вивчення рівня', value: 'level' },
      { label: 'Розмовна англійська', value: 'speaking' },
      { label: 'Інтенсивна англійська', value: 'intensive' },
      { label: 'Лексика і граматика', value: 'grammar' },
      { label: 'Підготовка до іспиту IELTS', value: 'exams_ielts' },
      { label: 'Підготовка до іспиту TOEFL', value: 'exams_toefl' },
      { label: 'Бізнес-англійська', value: 'business' },
      { label: 'Юридична англійська', value: 'law' },
    ],
    program: [
      { id: 'a1', label: 'A1 Beginner: Course' },
      { id: 'a2', label: 'A2 Elementary: Course' },
      { id: 'b1', label: 'B1 Pre Intermediate: Course' },
      { id: 'b1+', label: 'B1+ Intermediate: Course' },
      { id: 'b2', label: 'B2 Upper Intermediate: Course' },
      { id: 'c1', label: 'C1 Advanced: Course' },
      { id: 'c2', label: 'C2 Proficiency: Course' },
    ],
    format: [
      { id: 'on', label: 'Онлайн' },
      { id: 'off', label: 'Офлайн' },
    ],
    time: [
      { id: 'morning', label: 'Ранкові групи' },
      { id: 'day', label: 'Денні групи' },
      { id: 'evening', label: 'Вечірні групи' },
    ],
    teacher: [
      { id: '1', label: 'Lorem ipsum' },
      { id: '2', label: 'Lorem ipsum' },
      { id: '3', label: 'Lorem ipsum' },
      { id: '4', label: 'Lorem ipsum' },
      { id: '5', label: 'Lorem ipsum' },
      { id: '6', label: 'Lorem ipsum' },
    ],
  },
  courses: [],
};
