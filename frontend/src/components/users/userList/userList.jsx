import useFetchData from "../../../hooks/userFetchData";
import UserCard from "../userCard/userCard";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import UserCardModel from "../userModel/userModel";
import { FaHandshakeAngle } from "react-icons/fa6";
import { loggedInUser } from "../../../hooks/loggedInUser";

const UserList = () => {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showFollowersOnly, setShowFollowersOnly] = useState(false);
  const { data, loading, error } = useFetchData("/api/users");
  const users = data?.users || [];
  const currentUserId = loggedInUser()._id;

  const filteredUsers = search.trim() === "" ? users : users.filter((user) => {
    const name = user.name?.toLowerCase() || '';
    const email = user.email?.toLowerCase() || '';
    const department = user.department?.toLowerCase() || '';

    const matchesSearch =
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      department.includes(search.toLowerCase());

    const isFollowingCurrentUser = user.allFollowers?.includes(currentUserId);

    return showFollowersOnly ? isFollowingCurrentUser && matchesSearch : matchesSearch;
  });

  const toogleUsersList = () => {
    setShowFollowersOnly((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12 relative">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        All Users
      </h1>

      <div className="max-w-full flex justify-between mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name, email, or department..."
          className="w-[80%] px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
        <button
          className="border-2 border-[var(--colorPrimary)] font-semibold cursor-pointer p-1 text-[10px] text-[var(--colorPrimary)] rounded flex items-center gap-2 hover:text-white hover:bg-[var(--colorPrimary)]"
          onClick={toogleUsersList}
        >
          <FaHandshakeAngle size={20} />
          {showFollowersOnly ? "All Users" : "Following Only"}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <MoonLoader size={35} color="var(--colorPrimary)" />
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5">
          {filteredUsers.map((user) => (
            <div key={user._id} className="cursor-pointer">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <UserCardModel selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
};

export default UserList;
