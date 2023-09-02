import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { TeacherSkill } from '../index';

const skillsLeft = [
  { label: 'Professional', description: 'постійно вдосконалюють свої навички' },
  { label: 'Experienced', description: 'із досвідом викладання від 3 років' },
  {
    label: 'Qualified',
    description:
      'мають міжнародні викладацькі кваліфікації: CELTA, DELTA, CELT-P, CELT-S, IHCYLT, TYLEC, TKT',
  },
];

const skillsRight = [
  { label: 'Unique', description: 'проходять суворий відбір та регулярний моніторинг' },
  { label: 'Equipped', description: 'володіють всіма кращими методиками' },
  { label: 'Universal', description: 'ведуть різні програми та вікові групи офлайн та онлайн' },
];

const OurTeachers = () => {
  return (
    <section className="w-full">
      <div className="pt-20 max-w-[1320px] mx-auto flex flex-col space-y-12">
        <div className="flex space-x-2 justify-between">
          <h1 className="text-3xl text-left">Наші викладачі</h1>
          <Button variant="secondary" className="text-xl text-[#4A5EAA]">
            Детальніше про викладачів &#707;
          </Button>
        </div>
        <div className="flex space-x-6">
          <div className="w-1/3 flex flex-col space-y-8">
            {skillsLeft.map((item, index) => {
              const { label, description } = item;

              return <TeacherSkill key={index + 1} label={label} description={description} />;
            })}
          </div>
          <div className="w-1/3">
            <AspectRatio ratio={15 / 16} className="bg-accent rounded-lg"></AspectRatio>
          </div>
          <div className="w-1/3 flex flex-col space-y-8">
            {skillsRight.map((item, index) => {
              const { label, description } = item;

              return <TeacherSkill key={index + 1} label={label} description={description} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
