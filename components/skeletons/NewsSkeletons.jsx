import { Skeleton } from '../ui/skeleton';

export const LatestNewsSkeleton = () => {
  return (
    <div className="w-full flex flex-col max-w-[420px] justify-center space-y-2 p-3 hover:bg-accent rounded-lg">
      <Skeleton className="w-full h-64 rounded-lg"></Skeleton>
      <Skeleton className="w-24 h-4"></Skeleton>
      <Skeleton className="w-full h-4"></Skeleton>
    </div>
  );
};

export const OthersNewsSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center md:w-96 md:h-36 p-3 space-y-5 md:space-x-5 hover:bg-accent rounded-lg">
      <Skeleton className="w-full md:w-1/2 h-44 md:h-full"></Skeleton>
      <div className="w-full md:w-1/2 flex flex-col mt-2 space-y-2 h-max">
        <Skeleton className="w-24 h-4"></Skeleton>
        <Skeleton className="w-full h-12"></Skeleton>
      </div>
    </div>
  );
};

export const NewsItemsSkeleton = ({ id }) => {
  return (
    <div
      className={`${
        id === 1 || id === 2 ? 'w-full md:w-1/2' : 'w-full md:w-1/3'
      } h-max p-5 hover:bg-accent space-y-3`}>
      <Skeleton className="w-full h-48 md:h-96 bg-accent rounded-md object-cover"></Skeleton>
      <Skeleton className="w-16 h-4"></Skeleton>
      <Skeleton className="w-full h-4"></Skeleton>
    </div>
  );
};

export const RestNewsSkeleton = ({ id }) => {
  return (
    <div
      className={`${
        id === '1' || id === '2' ? 'w-full md:w-1/2' : 'w-full md:w-1/3'
      } h-max p-5 min-w-[300px] max-w-[400px] hover:bg-accent rounded-lg flex flex-col space-y-2`}>
      <Skeleton className="h-48 w-60"></Skeleton>
      <Skeleton className="h-4 w-24"></Skeleton>
      <Skeleton className="h-8 w-48"></Skeleton>
    </div>
  );
};
