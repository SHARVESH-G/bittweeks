import { TextField } from '@mui/material'

const Input = ({ placeholder, label ,type}) => {
  return (
    <div className="flex flex-col w-full pt-4">
      <label className="text-xl text-gray-600 font-medium mb-1">{label}</label>
      <TextField
        variant="outlined"
        type={type}
        placeholder={placeholder}
        size="medium"
        fullWidth
        sx={{height:50}}
      />
    </div>
  )
}

export default Input
