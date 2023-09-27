import { Skeleton } from '../ui/skeleton';

const TestimonialsSkeleton = ({ height }) => {
  return (
    <div
      className={`bg-[#F8F8FA] rounded-xl ${height} grid grid-cols-1 w-full md:grid-cols-2 p-6 gap-2 mb-6`}>
      <Skeleton className="text-xl w-24 h-8"></Skeleton>
      <Skeleton className="text-base h-full w-full"></Skeleton>
    </div>
  );
};

export default TestimonialsSkeleton;
