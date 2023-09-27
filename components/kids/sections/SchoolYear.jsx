import KidsCoursesScheduleSkeleton from '@/components/skeletons/KidsCoursesScheduleSkeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

const SchoolYear = () => {
  const [coursesSchedule, setCoursesSchedule] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();
  const t = useTranslations('school_year');

  const pathname = usePathname();
  const calcURL = pathname.includes('en') ? 'en/courses/kids/schedule' : 'courses/kids/schedule';

  useEffect(() => {
    sendRequest({ url: calcURL }, setCoursesSchedule.bind(null));
  }, [sendRequest]);

  return (
    <section className="w-full">
      <div className="py-10 lg:py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14 px-5">
        <h1 className="text-2xl lg:text-4xl">{t('title')}</h1>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2 text-justify">
            <p className="text-xl">{t('first_desc')}</p>
            <p className="text-xl">{t('second_desc')}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          {error && <p className="w-full text-xl text-center p-8">{error}</p>}

          {coursesSchedule?.length === 0 && !isLoading ? (
            <p className="w-full text-xl text-center p-8">{t('error')}</p>
          ) : null}

          {isLoading && !error
            ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                return <KidsCoursesScheduleSkeleton key={id} />;
              })
            : coursesSchedule?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F4F6FD] p-2 lg:p-4 w-full md:w-1/2 space-y-5 rounded-lg">
                    <h1 className="text-2xl">
                      {item.type}
                      <span className="py-1 px-2 bg-white mx-5 rounded-lg text-base">
                        {item.duration}
                      </span>
                    </h1>
                    {item?.ages?.map((age, index) => {
                      return (
                        <Fragment key={index}>
                          <p>
                            <span className="text-xl">
                              {age.from}–{age.to} {t('years')}
                            </span>
                          </p>
                          {age?.courses?.map((course, index) => {
                            return (
                              <p key={index}>
                                <Link href={course.link}>{course.title}</Link>
                              </p>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default SchoolYear;
