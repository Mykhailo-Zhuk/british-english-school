import { Skeleton } from '../ui/skeleton';

const TestimonialsSkeleton = ({ height }) => {
  return (
    <div
      className={`bg-[#F8F8FA] rounded-xl ${height} w-[540px] md:w-[49%] p-6 space-y-2 mb-6 mr-6`}>
      <Skeleton className="text-xl w-full h-8"></Skeleton>
      <Skeleton className="text-base h-full w-full"></Skeleton>
    </div>
  );
};

export default TestimonialsSkeleton;
