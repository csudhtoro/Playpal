import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="text-center mb-12">
      <motion.h1
        className="sm:p-5 text-gray-900 text-3xl sm:text-[3.5rem] font-extrabold"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Find Activity Partners
      </motion.h1>
      <motion.h2
        className="mb-4 sm:mb-6 text-[#0356fc] text-3xl sm:text-[3.5rem] font-extrabold"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Near You
      </motion.h2>
      <motion.h2
        className="px-10 md:px-28 text-sm sm:text-lg text-gray-500 font-medium lg:max-w-[80ch] mx-auto my-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        delay={{ delay: 0.5 }}
      >
        Your go-to destination for connecting with like-minded adventurers and
        scheduling unforgettable meet-up events!
      </motion.h2>
    </div>
  );
}

export default Hero;
