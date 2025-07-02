import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { departmentOptions } from '../../../datas/departments';

export default function SelectDept({ text = "Department", name, value, onChange, ...props }) {
  return (
    <Box className="flex flex-col w-full pt-3">
      <label className="text-base text-gray-700 font-medium mb-1">
        {text}
      </label>
      <FormControl fullWidth size="small">
        <Select
          name={name}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Department' }}
          {...props}
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
