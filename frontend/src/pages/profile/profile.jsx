import React from "react";
import { DetailItem } from "./probleDetaile";
import { profileDetail } from "../../datas/temp/myProfile";
import { Avatar } from "@mui/material";
import Student from "../../assets/images/student.png";
import { FaUser, FaIdBadge, FaGraduationCap, FaUsers } from "react-icons/fa";

const UserDetailsPage = () => {
  const { name, username, department, followers } = profileDetail;

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 border border-[var(--colorPrimary)]">
        <div className="flex flex-col items-center gap-6">
          <Avatar
            src={Student}
            sx={{ height: "160px", width: "160px", border: "4px solid var(--colorPrimary)" }}
          />
          <h1 className="font-bold text-[var(--colorPrimary)] text-2xl sm:text-3xl lg:text-4xl">
            User Profile
          </h1>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <DetailItem label="Name" value={name} icon={<FaUser />} />
          <DetailItem label="Username" value={username} icon={<FaIdBadge />} />
          <DetailItem label="Department" value={department} icon={<FaGraduationCap />} />
          <DetailItem label="Followers" value={followers} icon={<FaUsers />} />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
