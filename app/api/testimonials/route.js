const testimonials = [
  {
    username: 'Тарас',
    content:
      'Мар’яна чудовий викладач, завжди готова допомогти та дати пораду. Заняття завжди проходили інформативно, матеріал викладався логічно та відповідно до вимог екзамену. З досвіду можу добавити, що без курсів підготовки саме по структурі екзамену, здати IELTS вкрай важко. Мар’яна впоралася з цим завданням на 100%. Рекомендую.',
  },
  {
    username: 'Anastasiya Onoshchenko',
    content:
      'I want to share my joy and happiness. I’ve received the results of CAE exam. And also I want to thank you for the whole course again and especially for all the tips you gave us. I really appreciate the way in which you explained every single task. It was extremely helpful for me during my exam. Before you course I was afraid of any kind of writing. And during the exam I was sure what to write and how to do that. I still understand that I have a lot to do, to learn and to brush up (talking about my speaking). Thank you thousand times. Hope to join another your course in future.',
  },
  {
    username: 'Oleksandra',
    content:
      'I would like to express my sincere gratitude to Alona for her time, energy and knowledge she has shared with us during our CAE Preparation online course (September 2020 – January 2021). We had an extremely strong group with a prevailing number of people who already had an impressively high level of English. Taking this into account, Alona managed to skilfully conduct each lesson and meet the requirements of demanding students, professionally overcoming all challenging questions that were arising during the group activities. I really admire Alona’s patience, professionalism, and client-oriented approach, as well as her friendly attitude and a good sense of humour. If you have decided to pass the CAE exam, don’t hesitate to choose Alona’s guidance for your exam preparation journey.',
  },
  {
    username: 'Наталія Ігнат',
    content:
      'Професійно, сучасно, якісно. Рекомендую. Курс бізнес англіської перевершив усі сподівання.',
  },
  {
    username: 'Valery',
    content:
      'Anna was my teacher on the course B2.1 upper intermediate. I liked her manner of teaching! I saw how she liked it and I think it is The most important thing! To love what you are doing! Also, I attend a lot of speaking and grammar clubs with different teachers. But her classes were and are the best!!!! She is so organized and helpful!',
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(testimonials));
}
