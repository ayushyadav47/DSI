import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownSection = ({ sections }) => {
  const [sectionItem, setSectionItem] = React.useState('');

  const handleChange = (event) => {
    setSectionItem(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
      <InputLabel id="section-select-label">Section</InputLabel>
      <Select
        labelId="section-select-label"
        id="section-select"
        value={sectionItem}
        onChange={handleChange}
        label="Section"
      >
        {sections.map((sectionItem, index) => (
          <MenuItem key={index} value={sectionItem}>
            {sectionItem} 
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSection;