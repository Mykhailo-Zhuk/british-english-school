import { NextResponse } from 'next/server';
import { carouselItems } from './carouselItems';

export async function GET() {
  return NextResponse.json(carouselItems);
}
