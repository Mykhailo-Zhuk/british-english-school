import { NextResponse } from 'next/server';
import { news } from '../news';

export async function GET(request, { params }) {
  const newsId = params.id;
  const findNewsItem = news.find((item) => item.id === newsId);

  return NextResponse.json(findNewsItem);
}

export async function PUT(request, { params }) {
  const newsId = params.id;
  const newsIndex = news.findIndex((item) => item.id === newsId);
  const findItem = news[newsIndex];
  findItem.likes += 1;

  return NextResponse.json(findItem);
}
