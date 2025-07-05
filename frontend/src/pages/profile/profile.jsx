import React from "react";
import { DetailItem } from "./probleDetaile";
import { loggedInUser } from "../../hooks/loggedInUser"
import { Avatar } from "@mui/material";
import { FaUser, FaIdBadge, FaGraduationCap, FaUsers , FaCalendarCheck } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md";


const UserDetailsPage = () => {
  const currentUser = loggedInUser();
  const  navi = useNavigate();
  const handleLogout = () =>{
    localStorage.clear();
    navi('/');
  }

  
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-[var(--colorPrimary)]">
        <div className="flex flex-col items-center gap-6">
          <Avatar
            src={currentUser.profilePic || ""}
            sx={{ height: "120px", width: "120px", border: "4px solid var(--colorPrimary)" , fontSize:'60px' }}
          >{!currentUser.profilePic && currentUser.name?.charAt(0).toUpperCase()}</Avatar>
          <h1 className="font-bold text-[var(--colorPrimary)] text-2xl sm:text-3xl lg:text-4xl">
            {currentUser.name} 
          </h1>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <DetailItem label="Email" value={currentUser.email} icon={<FaIdBadge />} />
          <DetailItem label="Department" value={currentUser.department} icon={<FaGraduationCap />} />
          <DetailItem label="Followers" value={currentUser.followers} icon={<FaUsers />} />
          <DetailItem label="Joined Date" value={new Date(currentUser.joined).toLocaleDateString().replaceAll("/" , "-")} icon={<FaCalendarCheck />} />
        </div>
        <div className="flex justify-center">
          <button onClick={handleLogout} className="mt-8 cursor-pointer border-2 py-2 px-4 border-red-500 text-red-500 flex items-center gap-3 rounded-md hover:bg-red-500 hover:text-white">
            <MdOutlineLogout/>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
