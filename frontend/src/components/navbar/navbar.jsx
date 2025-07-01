import React from 'react';
import { TiHome } from "react-icons/ti";
import { RiChatAiFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { SiApostrophe } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import Icon from '../../assets/images/loginLogo.png';

const Sidebar = () => {
  return (
    <div className="w-90 h-screen bg-slate-100 shadow-md">
      <div className="p-4 border-b flex justify-center">
        <img src={Icon} alt="Logo" height={150} width={150} />
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <Link to="/dashboard" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <TiHome size={35} /> Home
        </Link>
        <Link to="/community" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <HiUserGroup size={35} /> Group
        </Link>
        <Link to="/mypost" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <RiChatAiFill size={35} /> My Post
        </Link>
        <Link to="/users" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <FaEarthAmericas size={35} /> Users
        </Link>
        <Link to="/profile" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <IoMdSettings size={35} /> Settings
        </Link>
        <Link to="/posts" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <SiApostrophe size={35} /> Post
        </Link>
        <Link to="/" className="text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-6 rounded-[20px] flex items-center text-3xl gap-4">
          <IoLogOut size={35} /> Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
