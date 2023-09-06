import { adultCoursesDatails } from '../adultCoursesDatails';

export async function GET(request) {
  return new Response(JSON.stringify(adultCoursesDatails));
}
