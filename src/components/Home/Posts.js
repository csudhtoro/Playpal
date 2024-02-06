import React from "react";
import PostItem from "./PostItem";
import { motion } from "framer-motion";

function Posts({ posts }) {
  return (
    <motion.div
      className="max-w-[80rem] mx-auto flex flex-wrap justify-center items-start gap-4 sm:gap-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {posts.map((item, indx) => (
        <div key={indx}>
          <PostItem post={item} />
        </div>
      ))}
    </motion.div>
  );
}

export default Posts;
