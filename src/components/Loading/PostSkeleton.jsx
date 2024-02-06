import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostSkeleton = () => {
  return (
    <div>
      <div className="max-w-sm border-2 border-slate-300 rounded-lg shadow-sm h-full sm:w-[30rem]">
        <div className="p-2">
          <Skeleton width={363} height={250} />
        </div>
        <div className="p-6 text-start">
          <h5 className="mb-2 text-2xl font-bold text-gray-900">
            <Skeleton width={220} height={50} />
          </h5>

          <div className="text-sm flex gap-1 justify-start items-center py-2 font-semibold">
            <Skeleton width={120} height={30} />
          </div>
          <p className="py-2 line-clamp-3">
            <Skeleton width={400} height={50} />
          </p>
          <div className="py-2 line-clamp-3">
            <Skeleton width={400} height={30} />
          </div>

          <div className="py-5">
            <Skeleton width={100} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
