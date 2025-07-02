import { Chip } from "@mui/material";

const CustomChip = ({ text, bgcolor, color }) => {
  return (
    <Chip
      label={text}
      sx={{
        backgroundColor: bgcolor,
        color: color,
        fontSize: '0.5rem',
        height: 15,
        px: 0.02,
      }}
      size="small"
      variant="filled"
    />
  );
};

export default CustomChip;
