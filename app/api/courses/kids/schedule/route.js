import { NextResponse } from 'next/server';
import { schedule } from './schedule';

export async function GET() {
  return NextResponse.json(schedule);
}
