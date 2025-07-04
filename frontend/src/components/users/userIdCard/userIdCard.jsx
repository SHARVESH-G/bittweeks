import { Avatar } from '@mui/material';
import { loggedInUser } from '../../../hooks/loggedInUser';

const UserIdCard = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-3 border-b border-gray-300 select-none">
      {
        loggedInUser.profilePic 
                    ? <Avatar sx={{ width: 30, height: 30, fontSize: 14 }} src={loggedInUser.profilePic}/>
                    : <Avatar sx={{ width: 30, height: 30, fontSize: 14 }}>A</Avatar>
      }
      <div className="text-center">
        <h2 className="text-sm font-medium">{loggedInUser.name}</h2>
        <h2 className="text-xs text-gray-500">{loggedInUser.email}</h2>
      </div>
    </div>
  );
};

export default UserIdCard;
