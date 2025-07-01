import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { departmentOptions } from '../../../datas/departments';
import { useState } from 'react';

export default function SelectDept({ text }) {
  const [selectedDept, setSelectedDept] = useState('');

  const handleChange = (event) => {
    setSelectedDept(event.target.value);
  };

  return (
    <Box className="flex flex-col w-full pt-4">
      <FormControl fullWidth>
        <label className="text-xl text-gray-600 font-medium mb-1">{text}</label>
        <Select
          value={selectedDept}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Department'}}
        >
          <MenuItem value="" disabled>
            Select Department
          </MenuItem>
          {departmentOptions.map((department) => (
            <MenuItem key={department.value} value={department.value}>
              {department.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
