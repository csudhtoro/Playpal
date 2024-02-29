import React from "react";
import { useRouter } from "next/navigation";

const DropdownMenu = ({ signOut }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 flex flex-col absolute top-[1rem] sm:top-[0.8rem] right-[0.5rem] md:w-[120px] p-4 rounded-md border border-gray-300 shadow-sm shadow-gray-300">
      <ul className="flex flex-col gap-2 items-center justify-center">
        <li
          className="px-2 w-16 sm:w-18 md:w-20 text-xs font-medium md:text-sm text-[#0356fc] cursor-pointer hover:bg-gray-200 flex justify-between items-center"
          onClick={() => router.push("/profile")}
        >
          Profile
        </li>
        <li
          className="px-2 w-16 sm:w-18 md:w-20 text-xs font-medium md:text-sm text-[#0356fc] cursor-pointer hover:bg-gray-200 flex justify-between items-center"
          onClick={signOut}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
