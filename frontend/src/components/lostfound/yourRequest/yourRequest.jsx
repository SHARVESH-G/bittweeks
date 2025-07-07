import React, { useState } from 'react'
import useFetchData from '../../../hooks/userFetchData'
import LostFoundCard from '../lostFoundCard/lostFoundCard'
import { loggedInUser } from '../../../hooks/loggedInUser'


const YourRequest = () => {
    const currentUserId = loggedInUser()._id
  const [searchQuery, setSearchQuery] = useState("")
  const { data, loading, error } = useFetchData(`/api/alluserreq?userId=${currentUserId}`)

  const filteredItems = data?.filter(item =>
    item.reqTitle?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div>
      <h2 className="text-center text-xl font-semibold">Lost Items</h2>

      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search . . . . . ."
          className="w-full px-4 py-2 text-sm my-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems?.length > 0 ? (
          filteredItems.map(item => (
            <LostFoundCard key={item._id} item={item} />
          ))
        ) : (
          !loading && <p className="col-span-full text-center text-gray-500">No items found.</p>
        )}
      </div>
    </div>
  )
}

export default YourRequest;