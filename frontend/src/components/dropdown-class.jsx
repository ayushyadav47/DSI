// components/DropdownClass.jsx

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownClass = ({ classes }) => {
  const [classItem, setClassItem] = React.useState('');

  const handleChange = (event) => {
    setClassItem(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
      <InputLabel id="class-select-label">Class</InputLabel>
      <Select
        labelId="class-select-label"
        id="class-select"
        value={classItem}
        onChange={handleChange}
        label="Class"
      >
        {classes.map((classItem, index) => (
          <MenuItem key={index} value={classItem}>
            {classItem} 
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownClass;