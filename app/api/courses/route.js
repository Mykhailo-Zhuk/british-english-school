import { NextResponse } from 'next/server';
import { shortCard } from './shortCard';

export async function GET() {
  return NextResponse.json(shortCard);
}
