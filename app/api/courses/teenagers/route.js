import { NextResponse } from 'next/server.js';
import { teenagersListWithFilter } from './teenagersListWithFilter.js';

export async function GET() {
  return NextResponse.json(teenagersListWithFilter);
}
