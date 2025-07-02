import { TextField } from '@mui/material';

const Input = ({ placeholder, label, type = "text", ...props }) => {
  return (
    <div className="flex flex-col w-full pt-3">
      <label className="text-base text-gray-700 font-medium mb-1">{label}</label>
      <TextField
        variant="outlined"
        type={type}
        placeholder={placeholder}
        size="small"
        fullWidth
        {...props}
        InputProps={{
          sx: { borderRadius: 2 },
        }}
      />
    </div>
  );
};

export default Input;
