import { NextResponse } from 'next/server';
import { testimonials } from './testimonials';

export async function GET() {
  return NextResponse.json(testimonials);
}
