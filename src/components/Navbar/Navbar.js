import Image from "next/image";
import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LogIn, Pencil } from "lucide-react";
import { FaUserEdit } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthUserContext";
import Toast from "../Home/Toast";
import UserIcon from "./UserIcon";
import { motion } from "framer-motion";

const USER_IMAGE =
  "https://cdn-icons-png.flaticon.com/128/5178/5178994.png?uid=R124143615&ga=GA1.1.1996791833.1701550540&semt=ais";

function Navbar() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user === null) router.push("/");
    else {
      router.push("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) router.push("/dashboard");
  }, [user?.photoURL]);

  const handleSignOut = async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        return router.push("/signin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const presentToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      router.push("/dashboard");
    }, 3000);
  };

  return (
    <motion.div
      className="bg-gray-50 flex justify-between xl:justify-around p-6 rounded-xl mb-2 border-b border-slate-200 sticky top-0 z-10"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      delay={{ delay: 0.5 }}
    >
      <Link
        href={user ? "/dashboard" : "/"}
        className="flex items-center gap-2 sm:gap-4"
      >
        <span className="text-xl sm:text-2xl text-[#0356fc] hover:text-[#0244c9] font-extrabold font-sans">
          PlayPal
        </span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-3">
        {user ? (
          <button
            className="bg-[#0356fc] hover:bg-[#0244c9] px-4 text-[.8rem] text-xs font-medium text-white rounded-2xl h-9 sm:h-10 "
            onClick={() => router.push("/create-post")}
          >
            <span className="hidden sm:block"> Create New Post</span>{" "}
            <Pencil className="sm:hidden" size={18} />
          </button>
        ) : (
          ""
        )}
        {!user ? (
          <div className="flex justify-between gap-2">
            <button
              className="bg-[#0356fc] text-[.8rem] text-white font-medium px-4 rounded-2xl h-9 sm:h-10  hover:bg-[#0339a3]"
              onClick={() => router.push("/registration")}
            >
              <span className="hidden sm:block">Register</span>{" "}
              <FaUserEdit className="sm:hidden" size={18} />
            </button>
            <button
              className="text-[.8rem] text-[#0356fc] font-medium px-4 rounded-2xl h-9 sm:h-10 hover:bg-slate-200 border border-[#0356fc]"
              onClick={() => router.push("/signin")}
            >
              <span className="hidden sm:block">Sign In</span>{" "}
              <LogIn className="sm:hidden" size={18} />
            </button>
          </div>
        ) : (
          <UserIcon userImg={user.photoURL} signOut={handleSignOut} />
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
