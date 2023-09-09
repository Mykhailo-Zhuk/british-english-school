import { shortCard } from './shortCard';

export async function GET(request) {
  return new Response(JSON.stringify(shortCard));
}
