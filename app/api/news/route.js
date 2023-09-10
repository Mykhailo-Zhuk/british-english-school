import images from '@/public/images';

const news = [
  {
    id: '1',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '05.09.2023',
    image: images.news,
  },
  {
    id: '2',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '04.09.2023',
    image: images.news,
  },
  {
    id: '3',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '03.09.2023',
    image: images.news,
  },
  {
    id: '4',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel bibendum velit, et mollis lorem. Nulla vestibulum, risus lobortis porttitor',
    date: '02.09.2023',
    image: images.news,
  },
  {
    id: '5',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '01.09.2023',
    image: images.news,
  },
  {
    id: '6',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
  {
    id: '7',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
  {
    id: '8',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit.',
    date: '30.08.2023',
    image: images.news,
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(news));
}
