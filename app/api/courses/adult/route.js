import { adultListWithFilter } from './adultListWithFilter.js';

export async function GET(request) {
  return new Response(JSON.stringify(adultListWithFilter));
}
