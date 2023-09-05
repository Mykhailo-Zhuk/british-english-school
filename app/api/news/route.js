import images from '@/public/images';

const news = [
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '05.09.2023',
    image: images.news,
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '04.09.2023',
    image: images.news,
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '03.09.2023',
    image: images.news,
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '02.09.2023',
    image: images.news,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '01.09.2023',
    image: images.news,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
];

const [latest, ...others] = news;

export async function GET(request) {
  return new Response(JSON.stringify({ latest, others }));
}
