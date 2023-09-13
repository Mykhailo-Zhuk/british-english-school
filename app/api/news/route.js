import { NextResponse } from 'next/server';
import { news } from './news';

export async function GET() {
  return NextResponse.json(news);
}
