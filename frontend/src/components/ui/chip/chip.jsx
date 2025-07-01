import { Chip } from "@mui/material"

const CustomChip = ({text , bgcolor , color}) => {
  return (
    <Chip
        label={text}
        sx={{backgroundColor:bgcolor , color:color}}
        size="small"
    />
  )
}

export default CustomChip