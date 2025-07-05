import { DetailItem } from "../../../pages/profile/probleDetaile";
import { FaUser, FaIdBadge, FaGraduationCap, FaUsers } from "react-icons/fa";
import { CgCloseO } from "react-icons/cg";
import { Avatar } from "@mui/material";
import { randomColor } from "../../../datas/colors";

const UserCardModel = ({selectedUser , setSelectedUser }) =>{
    return(
        <div
          className="fixed inset-0 bg-none bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedUser(null)}
            >
              <CgCloseO size={25} color="red"/>
            </button>
            <div className="flex justify-center">
                <Avatar src={selectedUser?.profilePic} sx={{height:120 ,bgcolor:randomColor, width:120 , border:"solid var(--colorPrimary) 3px" , fontSize:"75px" , textAlign:'center' , display:'flex' , alignItems:"center"}}>
                    {!selectedUser.profilePic && selectedUser.name.slice(0,1).toUpperCase()}
                </Avatar>
            </div>
            <div className="space-y-4">
              <DetailItem label="Name" value={selectedUser.name} icon={<FaUser />} />
              <DetailItem label="Email" value={selectedUser.email} icon={<FaIdBadge />} />
              <DetailItem label="Department" value={selectedUser.department} icon={<FaGraduationCap />} />
              <DetailItem label="Followers" value={selectedUser.followers} icon={<FaUsers />} />
            </div>
          </div>
        </div>
    );
}

export default UserCardModel;