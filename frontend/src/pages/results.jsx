import React, { useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Box, TextField, Stack } from '@mui/material';
import Navbar from '../components/navbar.jsx';
import DropdownClass from '../components/dropdown-class.jsx';
import DropdownSection from '../components/dropdown-section.jsx';
import DropdownYear from '../components/dropdown-year.jsx';
import DropdownSubject from '../components/dropdown-subject.jsx';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Pass the search text to the parent component
    if (onSearch) {
      onSearch(searchText);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    // Trigger search on Enter key press
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <TextField
        label="Search by name"
        variant="outlined"
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: 8 }}>
        Search
      </Button>
    </div>
  );
};

const DateInput = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    // Pass the selected date to the parent component
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  return (
    <div>
      <label htmlFor="dateInput"></label>
      <input
        type="date"
        id="dateInput"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

const Results = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleStartDateChange = (selectedDate) => {
    // Handle the selected date
    console.log('Selected Date:', selectedDate);
    // Add your logic here
  };
  const handleStopDateChange = (selectedDate) => {
    // Handle the selected date
    console.log('Selected Date:', selectedDate);
    // Add your logic here
  };
  

  const data = [
    { title: 'Box 1', subject: 'Math',chapter:'Mensuration', topic: 'Introduction', timeOfAttempt: '2-10-23', criticalThinking: 'High',
    criticalThinking: 12,
    values: 10,
    socialContext: 5,
    creativity: 0,},
    { title: 'Box 2', subject: 'Math',chapter:'Mensuration', topic: 'Area of a Polygon', timeOfAttempt: '23-10-23',
    criticalThinking: 0,
    values: 0,
    socialContext: 5,
    creativity: 3, },
    // Add more data as needed
  ];
  
    return (
      <>
      <Navbar/>
      <Box m={2} width="100%">
        <Stack direction="row" spacing={5}>
          <DropdownSubject subjects={['Math', 'Science', 'English']} onChange={handleSubjectChange} />
          <p/>Date Range:<br/>
          <DateInput onDateChange={handleStartDateChange} />
          <DateInput onDateChange={handleStopDateChange} />
        </Stack>
        <br/>
        
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data.map((item, index) => (
        <Box key={index} sx={{ border: 1, borderRadius: 2, padding: 2, margin: 2}}>
          <Typography variant="h6">{item.topic}</Typography>
          <Typography>{`Subject: ${item.subject}`}</Typography>
          <Typography>{`Chapter: ${item.chapter}`}</Typography>
          <Typography>{`Date of Attempt: ${item.timeOfAttempt}`}</Typography>
          <Typography>{`Critical Thinking: ${item.criticalThinking}`}</Typography>
          <Typography>{`Values: ${item.values}`}</Typography>
          <Typography>{`Social Context: ${item.socialContext}`}</Typography>
          <Typography>{`Creativity: ${item.creativity}`}</Typography>
        </Box>
      ))}
        </Box>
        
      </Box>
    </>
    );
  };

export default Results;