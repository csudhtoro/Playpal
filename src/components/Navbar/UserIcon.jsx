import Image from "next/image";
import React, { useState, useEffect, useRef, use } from "react";
import DropdownMenu from "./DropdownMenu";
import handler from "@/pages/api/hello";

const USER_IMAGE =
  "https://cdn-icons-png.flaticon.com/128/5178/5178994.png?uid=R124143615&ga=GA1.1.1996791833.1701550540&semt=ais";

const UserIcon = ({ userImg, signOut }) => {
  const [openProfile, setOpenProfile] = useState(false);

  let subMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!subMenuRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={subMenuRef}>
      <Image
        src={userImg ? userImg : USER_IMAGE}
        alt="user_pic"
        width={400}
        height={400}
        quality={100}
        className="w-8 sm:w-10 rounded-full cursor-pointer hover:scale-105"
        onClick={() => setOpenProfile((prev) => !prev)}
      />
      <div className="relative">
        {openProfile && <DropdownMenu signOut={signOut} />}
      </div>
    </div>
  );
};

export default UserIcon;
