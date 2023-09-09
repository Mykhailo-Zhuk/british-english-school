import { shortCard } from '../shortCard';

export async function GET(request) {
  const { kids } = shortCard;

  return new Response(JSON.stringify(kids));
}
