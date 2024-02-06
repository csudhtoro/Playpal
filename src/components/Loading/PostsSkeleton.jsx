import React from "react";
import Skeleton from "react-loading-skeleton";
import PostSkeleton from "./PostSkeleton";

const PostsSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((_, indx) => (
      <div className="relative" key={indx}>
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%] flex justify-center items-center   py-2 rounded-lg font-semibold mx-auto">
          <PostSkeleton />
        </div>
      </div>
    ));
};

export default PostsSkeleton;
