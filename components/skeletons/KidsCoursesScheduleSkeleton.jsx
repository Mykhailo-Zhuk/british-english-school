import { Skeleton } from '../ui/skeleton';

const KidsCoursesScheduleSkeleton = () => {
  return (
    <div className="bg-[#F4F6FD] p-4 w-1/2 space-y-8">
      <div className="flex space-x-5">
        <Skeleton className="w-40 h-4"></Skeleton>
        <Skeleton className="py-1 px-2 bg-white mx-5 rounded-lg w-32 h-4"></Skeleton>
      </div>
      {Array.from({ length: 2 }, (_, i) => i + 1).map((_, id) => {
        return (
          <div key={id} className="flex flex-col space-y-5">
            <Skeleton className="w-24 h-4"></Skeleton>
            <Skeleton className="h-4 w-80"></Skeleton>
          </div>
        );
      })}
    </div>
  );
};

export default KidsCoursesScheduleSkeleton;
