import { initialData } from '../initialData';

export async function GET(request) {
  const {
    courses: { teenagers },
  } = initialData;

  return new Response(JSON.stringify(teenagers));
}
