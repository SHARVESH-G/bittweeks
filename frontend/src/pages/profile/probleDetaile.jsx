import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "18px",
  color: "black",
  fontWeight: 600,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const ItemHeading = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(0.5),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  fontSize: "16px",
  color: "var(--colorPrimaryTernary)",
  fontWeight: 700,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

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

