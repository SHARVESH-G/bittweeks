import { Avatar } from '@mui/material';
import { loggedInUser } from '../../../hooks/loggedInUser';
import { DeptCodeFetcher } from "../../../helper/deptToDeptCode";

const UserIdCard = () => {
  const currentUser = loggedInUser();

  if (!currentUser) return null; // User not yet loaded

  // ✅ Safe check in case department is missing
  const departmentCode = currentUser?.department
    ? DeptCodeFetcher(currentUser.department)
    : 'N/A';

  console.log("👤 User from localStorage:", currentUser);
  console.log("📚 currentUser.department:", currentUser.department);


  return (
    <div className="flex items-center justify-center gap-3 py-3 border-b border-gray-300 select-none">
      {currentUser.profilePic ? (
        <Avatar
          sx={{
            width: 30,
            height: 30,
            fontSize: 14,
            border: '2px solid var(--colorPrimary)'
          }}
          src={currentUser.profilePic}
        />
      ) : (
        <Avatar
          sx={{
            width: 30,
            height: 30,
            fontSize: 14,
            border: '2px solid var(--colorPrimary)'
          }}
        >
          {currentUser.name?.[0]?.toUpperCase() ?? "?"}
        </Avatar>
      )}

      <div className="text-center">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium">{currentUser.name ?? "Unknown"}</h2>
          <span className="text-sm text-[var(--colorPrimary)]">
            {departmentCode}
          </span>
        </div>
        <h2 className="text-xs text-gray-500">{currentUser.email ?? "No email"}</h2>
      </div>
    </div>
  );
};

export default UserIdCard;
