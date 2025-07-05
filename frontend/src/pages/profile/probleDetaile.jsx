export const DetailItem = ({ label, value, icon }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 text-[var(--colorPrimaryTernary)] font-semibold text-base sm:text-lg flex items-center gap-2 mb-1">
          {icon}
          {label}
        </div>
        <div className="col-span-12 bg-white text-black font-medium text-base sm:text-lg p-2 rounded-md shadow-sm border border-gray-200">
          {value}
        </div>
      </div>
    </div>
  );
};
