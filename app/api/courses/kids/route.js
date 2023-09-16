import { NextResponse } from 'next/server';
import { kidsListWithFilter } from './kidsListWithFilter';

export async function GET() {
  return NextResponse.json(kidsListWithFilter);
}
