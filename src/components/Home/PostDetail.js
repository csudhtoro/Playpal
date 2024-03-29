import Image from "next/image";
import React, { useState } from "react";
import MapBox from "./MapBox";
import { FaRegCalendarMinus } from "react-icons/fa";
import { useRouter } from "next/router";
import moment from "moment";
import { FaMapPin } from "react-icons/fa6";
import { motion } from "framer-motion";

function PostDetail() {
  const router = useRouter();
  const {
    tags,
    image,
    location,
    zipCode,
    userName,
    userImage,
    title,
    desc,
    date
  } = router.query;

  const [activityTags, setactivityTags] = useState(JSON.parse(tags));

  let dateFormat = moment(date).format("MM/D/YYYY");

  return (
    <div className="max-w-[1126px] h-fit mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-end px-6 text-xs sm:text-lg text-gray-900 font-semibold">
          <div className="flex gap-2 items-center py-4">
            <FaRegCalendarMinus fill="#0356fc" /> {dateFormat}
          </div>
        </div>
        <div className="w-fit px-6">
          <Image
            className="rounded-lg object-cover w-screen max-h-[40rem] shadow-slate-400 shadow-md"
            src={image}
            alt="activity image"
            width={100}
            height={100}
            unoptimized={true}
            priority
          />
        </div>
        <div className="text-gray-900 flex justify-between py-2">
          <div className="flex gap-1 items-center px-6">
            {" "}
            <FaMapPin fill="#0356fc" size={22} />{" "}
            <span className="text-[0.7rem] sm:text-sm md:text-lg line-clamp-1 text-ellipsis">
              {location}
            </span>
            <span className="text-[0.7rem] sm:text-sm md:text-lg">
              {zipCode}
            </span>
          </div>
          <div className="px-6">
            <span className="flex items-center justify-between gap-2 text-[0.7rem] sm:text-sm md:text-lg">
              <p className="font-bold">Organizer:</p>
              <span className="font-semibold">
                <Image
                  src={userImage}
                  width={400}
                  height={400}
                  alt="user image"
                  className="w-7 sm:w-12 rounded-full"
                />
              </span>
              <p className="text-[0.7rem] sm:text-lg line-clamp-1 text-ellipsis">
                {userName}
              </p>
            </span>{" "}
          </div>
        </div>

        <div className="text-gray-900 px-6 mt-6 sm:mt-12 text-center text-[2rem] sm:text-[3rem] font-bold">
          {title}
        </div>

        <div className="px-20 mt-4 text-sm md:text-[1.4rem] text-center text-gray-500">
          {desc}
        </div>

        <div className="flex flex-wrap justify-center gap-2 px-12 py-6">
          {activityTags &&
            activityTags.map((tag, indx) => {
              return (
                <div
                  key={indx}
                  className="py-1 px-3 text-[0.7rem] sm:text-[1.3rem] text-gray-900 rounded-lg font-bold border-2 border-slate-400 bg-slate-100 shadow-sm"
                >
                  {tag.label}
                </div>
              );
            })}
        </div>
      </motion.div>
      <>
        <div className="text-gray-900 mt-8 sm:mt-14">
          <MapBox location={zipCode} />
        </div>
      </>
    </div>
  );
}

export default PostDetail;
