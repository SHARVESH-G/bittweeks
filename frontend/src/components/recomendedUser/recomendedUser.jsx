import { useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/userFetchData";
import CustomChip from "../ui/chip/chip";
import { randomColor } from "../../datas/colors";
import { MoonLoader } from "react-spinners";
import { loggedInUser } from "../../hooks/loggedInUser";



const getRandomUsers = (users, count = 3) => {
  if (!users || users.length === 0) return [];
  const shuffled = [...users].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RecommendedUser = () => {
  const { data, loading, error } = useFetchData("/api/users");
  const allUsers = data?.users || [];
  const [recommendedUsers, setRecommendedUsers] = useState([]);
  const currentColors = useRef({})
  
  useEffect(() => {
    if (allUsers.length > 0) {
      setRecommendedUsers(getRandomUsers(allUsers, 3));
    }
  }, [allUsers]);

  const refreshUsers = () => {
    setRecommendedUsers(getRandomUsers(allUsers, 3));
  };

  const  currentUser = loggedInUser();

  return (
    <div className="bg-white px-6 py-8 rounded-xl shadow">
      <h2 className="text-sm font-semibold mb-3 pb-4">Recommended Users</h2>

      {loading ? (
        <div className="flex justify-center py-6">
          <MoonLoader size={24} color="#3498db" />
        </div>
      ) : error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : (
        <>
          <ul className="space-y-3">
            {recommendedUsers.map((user, index) => (
              <li
                key={user._id + "-" + index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <Avatar
                    sx={{
                      bgcolor: (()=>{
                        const id = user._id
                        if(!currentColors.current[id]){
                          currentColors.current[id] = randomColor();
                        }
                        return currentColors.current[id]
                      })(),
                      width: 32,
                      height: 32,
                      fontSize: 14,
                    }}
                    src={user.profilePic || ""}
                  >
                    {!user.profilePic && user.name.charAt(0)}
                  </Avatar>

                  <div className="text-xs">
                    <div className="flex gap-6">
                      <p className="font-medium">{user.name}</p>
                      {user.department === currentUser.department && (
                        <CustomChip
                          text="Your Dept"
                          bgcolor="var(--colorPrimaryTernary)"
                          color="white"
                        />
                      )}
                    </div>
                    <p className="text-[var(--colorPrimaryHover)]">
                      {user.email}
                    </p>
                  </div>

                  
                </div>
                <button className="text-xs bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white px-2 py-1 rounded-md">
                  Follow
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between pt-3 text-xs">
            <Link to="/users" className="text-[var(--colorPrimary)]">
              See all
            </Link>
            <button
              onClick={refreshUsers}
              className="text-[var(--colorPrimary)] cursor-pointer"
            >
              Refresh
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecommendedUser;
