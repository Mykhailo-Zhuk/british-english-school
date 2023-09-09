import { shortCard } from '../shortCard';

export async function GET(request) {
  const { teenagers } = shortCard;

  return new Response(JSON.stringify(teenagers));
}
