import { initialData } from '../initialData';

export async function GET(request) {
  const {
    courses: { adult },
  } = initialData;

  return new Response(JSON.stringify(adult));
}
