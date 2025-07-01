import UserCard from "../userCard/userCard";
import { AllUsers } from "../../../datas/temp/allUsers";
import { useState } from "react";

const UserList = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = AllUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black mb-6 text-center">Recommended Users</h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name, username, or dept..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;