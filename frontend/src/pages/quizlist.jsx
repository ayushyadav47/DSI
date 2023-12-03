import React, { useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Box } from '@mui/material';
import Navbar from '../components/navbar.jsx';
import DropdownClass from '../components/dropdown-class.jsx';
import DropdownSection from '../components/dropdown-section.jsx';
import DropdownYear from '../components/dropdown-year.jsx';
import DropdownSubject from '../components/dropdown-subject.jsx';

const QuizList = () => {

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };
  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

    return (
      <>
      <Navbar/>
      <Box m={2} width="100%">

      
      
        
        <DropdownClass classes={['6', '7', '8']} onChange={handleClassChange} />
        <DropdownSection sections={['A', 'B', 'C']} onChange={handleSectionChange} />
        <DropdownSubject subjects={['Math', 'Science', 'English']} onChange={handleSubjectChange} />
        <DropdownYear years={['2022-2023', '2023-2024', '2024-2025']} onChange={handleYearChange} />

        <br/>
        
      </Box>
    </>
    );
  };

export default QuizList;