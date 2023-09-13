import { NextResponse } from 'next/server.js';
import { adultListWithFilter } from './adultListWithFilter.js';

export async function GET() {
  return NextResponse.json(adultListWithFilter);
}
