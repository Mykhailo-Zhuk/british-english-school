import { adultDetails, proficiency, forExams } from '../../adultCoursesDatails';

export async function GET(request) {
  return new Response(
    JSON.stringify({
      adult: adultDetails,
      proficiency: proficiency,
      exams: forExams,
    }),
  );
}
