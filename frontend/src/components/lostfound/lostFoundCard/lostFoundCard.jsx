import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import { randomColor } from "../../../datas/colors";
import Popover from "@mui/material/Popover";

const LostFoundCard = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const randomColors = useRef({});

  const authorId = item.reqAuthor._id;
  if (!randomColors.current[authorId]) {
    randomColors.current[authorId] = randomColor();
  }
  const avatarBg = randomColors.current[authorId];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "image-popover" : undefined;

  return (
    <div
      key={item._id}
      className="w-full max-w-sm p-4 border rounded-lg shadow-sm bg-white flex flex-col gap-2"
    >
      <div className="border-2 border-b-gray-400 border-t-0 border-x-0 flex items-center gap-4 pb-1">
        <Avatar
          sx={{
            height: "25px",
            width: "25px",
            fontSize: "12px",
            background: avatarBg,
          }}
          src={item?.reqImage}
        >
          {!item.reqImage && item.reqAuthor.name.slice(0, 1).toUpperCase()}
        </Avatar>
        <h3
          className="text-sm text-gray-600 truncate"
          title={item.reqAuthor.name}
        >
          {item.reqAuthor.name}
        </h3>
      </div>

      <div className="flex flex-col gap-1 overflow-hidden">
        <h3 className="text-lg font-medium truncate" title={item.reqTitle}>
          {item.reqTitle}
        </h3>
        <p
          className="text-sm text-gray-600 truncate"
          title={item.reqContactInfo}
        >
          {item.reqContactInfo}
        </p>
        <p className="text-sm text-gray-500 truncate" title={item.reqPlace}>
          {item.reqPlace}
        </p>
      </div>

      <div className="flex items-center justify-center border border-gray-200 rounded p-2 w-full bg-[var(--colorPrimary)]/15">
        {item.reqImage ? (
          <img
            src={item.reqImage}
            alt="Preview"
            className="w-full h-[100px] object-contain"
          />
        ) : (
          <span className="text-gray-400 text-sm">No image</span>
        )}
      </div>

      {item.reqImage && (
        <div className="flex items-center gap-4 mt-2 justify-center">
          <button
            className="rounded-[10px] text-[var(--colorPrimary)] border-1 p-2 border-[var(--colorPrimary)] hover:bg-[var(--colorPrimary)] hover:text-white"
            aria-describedby={id}
            onClick={handleClick}
          >
            View Image
          </button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div style={{ maxWidth: 500, maxHeight: 500 }}>
              <img
                src={item.reqImage}
                alt="Full View"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default LostFoundCard;
