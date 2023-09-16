import KidsCoursesScheduleSkeleton from '@/components/skeletons/KidsCoursesScheduleSkeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import useHttp from '@/hooks/useHttp';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

const SchoolYear = () => {
  const [coursesSchedule, setCoursesSchedule] = useState([]);
  const { sendRequest, error, isLoading } = useHttp();

  useEffect(() => {
    sendRequest({ url: 'courses/kids/schedule' }, setCoursesSchedule.bind(null));
  }, []);

  return (
    <section className="w-full">
      <div className="py-20 max-w-[1320px] h-max mx-auto flex flex-col space-y-14">
        <h1 className="text-4xl">Навчальний рік</h1>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-5 w-1/2">
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quidem asperiores
              veritatis vel rem cumque nam amet totam iure quisquam?
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque incidunt
              ex saepe iste recusandae corporis totam? Totam, temporibus cumque, possimus voluptatum
              non nulla beatae laboriosam blanditiis, tenetur natus consectetur.
            </p>
          </div>
          <div className="w-1/2">
            <AspectRatio ratio={16 / 9} className="bg-accent rounded-lg">
              Video
            </AspectRatio>
          </div>
        </div>
        <div className="flex space-x-4">
          {error && <p className="w-full text-xl text-center p-8">{error}</p>}

          {coursesSchedule?.length === 0 && !isLoading ? (
            <p className="w-full text-xl text-center p-8">We have no courses</p>
          ) : null}

          {isLoading && !error
            ? Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
                return <KidsCoursesScheduleSkeleton key={id} />;
              })
            : coursesSchedule?.map((item, index) => {
                return (
                  <div key={index} className="bg-[#F4F6FD] p-4 w-1/2 space-y-5">
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
                              {age.from}–{age.to} років
                            </span>
                          </p>
                          {age?.courses?.map((course, index) => {
                            return (
                              <p>
                                <Link key={index} href={course.link}>
                                  {course.title}
                                </Link>
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
