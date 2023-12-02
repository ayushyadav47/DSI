import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DropdownSubject = ({ subjects }) => {
  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 200 }}>
      <InputLabel id="subject-select-label">Subject</InputLabel>
      <Select
        labelId="subject-select-label"
        id="subject-select"
        value={subject}
        onChange={handleChange}
        label="Subject"
      >
        {subjects.map((subject, index) => (
          <MenuItem key={index} value={subject}>
            {subject}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownSubject;