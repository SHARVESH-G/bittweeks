import { useState } from "react";
import GroupCard from "../groupCard/groupCard";
import { groups } from "../../../datas/temp/groups";

const GroupList = () => {
  const [search, setSearch] = useState('');

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        All Communities
      </h1>

      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;
