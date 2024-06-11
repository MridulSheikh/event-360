import { Skeleton } from "../skeleton";

const SckeletonCard = () => {
  return (
    <div className="p-4 rounded-lg">
      <Skeleton className="w-full h-[187px] rounded-lg" />
      <Skeleton className="mt-[12px] rounded-2xl h-4 w-full" />
    </div>
  );
};

export default SckeletonCard;
