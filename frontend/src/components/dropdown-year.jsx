import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownYear = ({ years }) => {
  const [yearItem, setYearItem] = React.useState('');

  const handleChange = (event) => {
    setYearItem(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
      <InputLabel id="year-select-label">Year</InputLabel>
      <Select
        labelId="year-select-label"
        id="year-select"
        value={yearItem}
        onChange={handleChange}
        label="Year"
      >
        {years.map((yearItem, index) => (
          <MenuItem key={index} value={yearItem}>
            {yearItem} 
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownYear;