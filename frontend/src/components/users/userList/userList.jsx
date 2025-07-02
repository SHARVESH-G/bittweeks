import { useState } from "react";
import UserCard from "../userCard/userCard";
import { AllUsers } from "../../../datas/temp/allUsers";

const UserList = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = AllUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        All Users
      </h1>

      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name, username, or department..."
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
