import { NextResponse } from 'next/server';
import { shortCard } from '../shortCard';

export async function GET() {
  const { kids } = shortCard;

  return NextResponse.json(kids);
}
