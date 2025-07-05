import React from "react";
import { Outlet, Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { MdDensitySmall } from "react-icons/md";


const EventsLayout = () => {
  return (
    <div className="px-6 py-4 ">
      <h1 className="text-3xl font-bold text-[var(--colorPrimary)] mb-4">
        Events
      </h1>
      <div className="mb-4 space-x-4 flex">
        <Link
          to="/events"
          className="mt-2 p-2 text-xs font-bold bg-[var(--colorPrimary)] border-2 text-white flex w-fit items-center gap-2"
        >
          <MdDensitySmall/> All Events
        </Link>
        <Link
          to="/events/add"
          className="mt-2 p-2 text-xs font-bold bg-[var(--colorPrimary)] border-2 text-white flex w-fit items-center gap-2"
        >
          <IoIosAddCircle size={20}/> Add Event
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default EventsLayout;
