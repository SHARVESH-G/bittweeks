import React from 'react';
import { TiHome } from "react-icons/ti";
import { RiChatAiFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { SiApostrophe } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', icon: <TiHome size={24} />, text: 'Home' },
  { to: '/community', icon: <HiUserGroup size={24} />, text: 'Group' },
  { to: '/mypost', icon: <RiChatAiFill size={24} />, text: 'My Post' },
  { to: '/users', icon: <FaEarthAmericas size={24} />, text: 'Users' },
  { to: '/events', icon: <MdEmojiEvents size={24} />, text: 'Events' },
  { to: '/profile', icon: <IoMdSettings size={24} />, text: 'Settings' },
  { to: '/posts', icon: <SiApostrophe size={24} />, text: 'Post' },
];

const MobileNavbar = () => {
  return (
    <div className="mobile-navbar fixed bottom-0 left-0 right-0 bg-slate-100 shadow-inner border-t border-gray-300 z-50">
      <nav className="flex justify-around items-center p-2 overflow-x-auto">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="flex flex-col text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white p-3 rounded-[20px] items-center text-3xl gap-1"
          >
            {item.icon}
            <span className="text-xs">{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
