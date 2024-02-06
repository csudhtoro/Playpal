import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PostsSkeleton from "./PostsSkeleton";

const DashboardSkeleton = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="sm:p-5 text-gray-900 text-3xl sm:text-[3.5rem] font-extrabold">
          <Skeleton width={750} height={90} />
        </div>
        <div className="mb-4 sm:mb-6 text-[#0356fc] text-3xl sm:text-[3.5rem] font-extrabold">
          <Skeleton width={300} height={50} />
        </div>
        <div className="px-10 md:px-28 text-center">
          <Skeleton width={750} height={60} />
        </div>
      </div>
      <div className="mb-12 text-center">
        <Skeleton width={500} height={60} />
      </div>

      <div className="mb-12 text-center">
        <Skeleton width={480} height={150} />
      </div>

      <div className="max-w-[80rem] mx-auto flex flex-wrap justify-center items-start gap-4 sm:gap-6">
        <PostsSkeleton card={8} />
      </div>
    </div>
  );
};

export default DashboardSkeleton;
