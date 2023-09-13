import { NextResponse } from 'next/server';
import { news } from '../news';

export async function GET(request, { params }) {
  const newsId = params.id;
  const findNewsItem = news.find((item) => item.id === newsId);

  return NextResponse.json(findNewsItem);
}
