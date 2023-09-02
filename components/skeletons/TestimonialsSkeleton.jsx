import { Skeleton } from '../ui/skeleton';

const TestimonialsSkeleton = () => {
  return (
    <div className="bg-[#F8F8FA] rounded-xl w-[49%] p-6 space-y-2 mb-6 mr-6">
      <Skeleton className="text-xl w-full h-4"></Skeleton>
      <Skeleton className="text-base h-12 w-full"></Skeleton>
    </div>
  );
};

export default TestimonialsSkeleton;
