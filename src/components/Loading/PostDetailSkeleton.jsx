import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";

const PostDetailSkeleton = () => {
  return (
    <div className="max-w-[1126px] h-screen mx-auto">
      <div className="flex justify-end px-6 text-sm sm:text-lg text-gray-900 font-semibold">
        <div className="flex gap-2 items-center py-4">
          <Skeleton width={50} height={20} />
        </div>
      </div>
      <div className="w-fit px-6">
        <Skeleton width={500} height={500} />
      </div>
      <div className="flex justify-between py-2">
        <div className="flex gap-1 items-center px-6">
          <Skeleton width={120} height={20} />
        </div>
        <div className="px-6">
          <span className="flex items-center justify-between gap-2 text-[.6rem] sm:text-sm md:text-lg">
            <Skeleton width={150} height={20} />
          </span>{" "}
        </div>
      </div>

      <div className="px-6 mt-6 sm:mt-12 text-center text-[2rem] sm:text-[3rem] font-bold">
        <Skeleton width={300} height={100} />
      </div>

      <div className="px-20 mt-4 text-lg sm:text-[1.4rem] text-center text-gray-500">
        <Skeleton width={450} height={200} />
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-12 py-6">
        <Skeleton width={300} height={100} />
      </div>
      <>
        <div className="mt-8 sm:mt-14">
          <Skeleton width={400} height={400} />
        </div>
      </>
    </div>
  );
};

export default PostDetailSkeleton;
