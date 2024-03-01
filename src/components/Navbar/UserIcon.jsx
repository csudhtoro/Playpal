import Image from "next/image";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const USER_IMAGE =
  "https://cdn-icons-png.flaticon.com/128/5178/5178994.png?uid=R124143615&ga=GA1.1.1996791833.1701550540&semt=ais";

const UserIcon = ({ userImg, signOut }) => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div>
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
        {openProfile && (
          <DropdownMenu
            className="-translate-y-24 ease-in-out"
            signOut={signOut}
          />
        )}
      </div>
    </div>
  );
};

export default UserIcon;
