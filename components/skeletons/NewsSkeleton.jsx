import { Skeleton } from '../ui/skeleton';

export const LatestNewsSkeleton = () => {
  return (
    <div className="w-full flex flex-col space-y-2 p-3 hover:bg-accent rounded-lg">
      <Skeleton className="w-full h-64 rounded-lg"></Skeleton>
      <Skeleton className="w-24 h-4"></Skeleton>
      <Skeleton className="w-full h-4"></Skeleton>
    </div>
  );
};

export const OthersNewsSkeleton = () => {
  return (
    <div className="flex w-96 h-36 p-3 space-x-5 hover:bg-accent rounded-lg">
      <Skeleton className="w-1/2 h-full"></Skeleton>
      <div className="w-1/2 flex flex-col mt-2 space-y-2 h-max">
        <Skeleton className="w-24 h-4"></Skeleton>
        <Skeleton className="w-full h-12"></Skeleton>
      </div>
    </div>
  );
};