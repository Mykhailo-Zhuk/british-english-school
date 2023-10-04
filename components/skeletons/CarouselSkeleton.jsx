import { Skeleton } from '../ui/skeleton';

const CarouselSkeleton = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto flex flex-col space-y-4 mt-20 md:mt-14 px-10">
      <Skeleton className="w-full h-[20vh] md:h-[50vh] xl:h-[70vh] p-4 rounded-lg"></Skeleton>
      <div className="flex items-center justify-center">
        <Skeleton className="h-4 w-24"></Skeleton>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
