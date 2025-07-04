import React from 'react';
import { TiHome } from "react-icons/ti";
import { RiChatAiFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { SiApostrophe } from "react-icons/si";
import { IoLogOut } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../assets/images/loginLogo.png';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); 
    localStorage.clear();
    navigate('/');
  };

  const navItems = [
    { to: '/dashboard', icon: <TiHome size={28} />, text: 'Home' },
    { to: '/community', icon: <HiUserGroup size={28} />, text: 'Group' },
    { to: '/mypost', icon: <RiChatAiFill size={28} />, text: 'My Post' },
    { to: '/users', icon: <FaEarthAmericas size={28} />, text: 'Users' },
    { to: '/profile', icon: <IoMdSettings size={28} />, text: 'Settings' },
    { to: '/posts', icon: <SiApostrophe size={28} />, text: 'Post' },
    { to: '/events', icon: <MdEmojiEvents size={28} />, text: 'Events' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-100 shadow-md">
      <div className="p-4 border-b flex justify-center">
        <img src={Icon} alt="Logo" className="w-28 h-28 object-contain" />
      </div>
      <nav className="flex flex-col px-4 py-6 space-y-3 select-none">
        {navItems.map(({ to, icon, text }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-xl flex items-center text-lg gap-3 transition-colors ${
                isActive
                  ? 'bg-[var(--colorPrimary)] text-white'
                  : 'text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white'
              }`}
            >
              {icon}
              <span className="truncate">{text}</span>
            </Link>
          );
        })}

        <Link
          to="/"
          onClick={handleLogout}
          className="px-4 py-3 rounded-xl flex items-center text-lg gap-3 text-[var(--colorSecondary)] hover:bg-[var(--colorPrimary)] hover:text-white transition-colors"
        >
          <IoLogOut size={28} />
          <span className="truncate">Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
