import React from "react";

export const SkeletonCard: React.FC = () => {
  return (
    <div className="p-4 flex flex-col justify-between rounded-3xl bg-[#141416] shadow animate-pulse">
      <div className="h-40 bg-[#201E1F] rounded-md mb-4"></div>
      <div className="flex flex-col gap-2">
        <div className="w-3/4 h-6 bg-[#201E1F] rounded"></div>
        <div className="w-1/2 h-4 bg-[#201E1F] rounded"></div>
        <div className="w-1/3 h-4 bg-[#201E1F] rounded"></div>
      </div>
      <div className="mt-4">
        <div className="w-2/3 h-6 bg-[#201E1F] rounded"></div>
      </div>
    </div>
  );
};
