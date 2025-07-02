import React from "react";
import { DetailItem } from "./probleDetaile";
import { profileDetail } from '../../datas/temp/myProfile'
import { Avatar } from "@mui/material";
import Student from '../../assets/images/student.png'

const UserDetailsPage = () => {

  const {name , username , department} = profileDetail

  return (
    <div className="min-h-full w-full flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 border border-[var(--colorPrimary)]">
        <div className="flex flex-col justify-center items-center gap-5">
          <Avatar src={Student} sx={{height:'200px' , width:'200px'}}/>
          <h1 className="font-bold text-center text-[var(--colorPrimary)] mb-8 text-xl sm:text-2xl lg:text-3xl">
            Your   Information
          </h1>
        </div>

        <div className="space-y-6">
          <DetailItem label="Name" value={name} />
          <DetailItem label="Username" value={username} />
          <DetailItem label="Department" value={department} />
        </div>
      </div>
    </div>
  );
};
export default UserDetailsPage;
