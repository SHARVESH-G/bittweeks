import React from "react";
import { DetailItem } from "./probleDetaile";
import { loggedInUser } from "../../hooks/loggedInUser"
import { Avatar } from "@mui/material";
import Student from "../../assets/images/student.png";
import { FaUser, FaIdBadge, FaGraduationCap, FaUsers } from "react-icons/fa";

const UserDetailsPage = () => {
  const { name, email, department, followers , profilePic } = loggedInUser();

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-[var(--colorPrimary)]">
        <div className="flex flex-col items-center gap-6">
          <Avatar
            src={profilePic || ""}
            sx={{ height: "160px", width: "160px", border: "4px solid var(--colorPrimary)" }}
          >{!profilePic && name?.charAt(0).toUpperCase()}</Avatar>
          <h1 className="font-bold text-[var(--colorPrimary)] text-2xl sm:text-3xl lg:text-4xl">
            User Profile
          </h1>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <DetailItem label="Name" value={name} icon={<FaUser />} />
          <DetailItem label="Email" value={email} icon={<FaIdBadge />} />
          <DetailItem label="Department" value={department} icon={<FaGraduationCap />} />
          <DetailItem label="Followers" value={followers} icon={<FaUsers />} />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
