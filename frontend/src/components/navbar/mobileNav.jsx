import React from 'react';
import { TiHome } from "react-icons/ti";
import { RiChatAiFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { SiApostrophe } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className="mobile-navbar fixed bottom-0 left-0 right-0 bg-slate-100 shadow-inner border-t border-gray-300 z-50">
      <nav className="flex justify-around items-center p-2">
        <Link to="/dashboard" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <TiHome size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/community" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <HiUserGroup size={24} />
          <span className="text-xs">Group</span>
        </Link>
        <Link to="/mypost" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <RiChatAiFill size={24} />
          <span className="text-xs">My Post</span>
        </Link>
        <Link to="/users" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <FaEarthAmericas size={24} />
          <span className="text-xs">Users</span>
        </Link>
        <Link to="/profile" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <IoMdSettings size={24} />
          <span className="text-xs">Settings</span>
        </Link>
        <Link to="/posts" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <SiApostrophe size={24} />
          <span className="text-xs">Post</span>
        </Link>
        <Link to="/" className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1">
          <IoLogOut size={24} />
          <span className="text-xs">Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileNavbar;
