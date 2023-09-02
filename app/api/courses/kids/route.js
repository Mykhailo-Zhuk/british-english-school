import { initialData } from '../initialData';

export async function GET(request) {
  const {
    courses: { kids },
  } = initialData;

  return new Response(JSON.stringify(kids));
}
