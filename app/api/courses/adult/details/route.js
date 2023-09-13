import { NextResponse } from 'next/server';
import { adultDetails, proficiency, forExams } from './details';

export async function GET(req, res) {
  return NextResponse.json({
    adult: adultDetails,
    proficiency: proficiency,
    exams: forExams,
  });
}
