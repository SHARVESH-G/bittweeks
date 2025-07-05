import { Avatar } from '@mui/material';
import { loggedInUser } from '../../../hooks/loggedInUser';
import { DeptCodeFetcher } from "../../../helper/deptToDeptCode";

const UserIdCard = () => {
  const currentUser = loggedInUser();
  return (
    <div className="flex items-center justify-center gap-3 py-3 border-b border-gray-300 select-none">
      {
        currentUser.profilePic 
                    ? <Avatar sx={{ width: 30, height: 30, fontSize: 14 , border:'2px solid var(--colorPrimary)' }} src={currentUser.profilePic}/>
                    : <Avatar sx={{ width: 30, height: 30, fontSize: 14 , border:'2px solid var(--colorPrimary)' }}>{currentUser.name.slice(0,1).toUpperCase()}</Avatar>
      }
      <div className="text-center">
        <div className='flex items-center justify-between '>
          <h2 className="text-sm font-medium">{currentUser.name}</h2>
          <span className="text-sm text-[var(--colorPrimary)]">
            {DeptCodeFetcher(currentUser.department.toUpperCase())}
          </span>
        </div>
        <h2 className="text-xs text-gray-500">{currentUser.email}</h2>
      </div>
    </div>
  );
};

export default UserIdCard;
