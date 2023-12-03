import React, { useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Box, TextField } from '@mui/material';
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

const ClassList = () => {
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

  const data = [
    { className: '8', section: 'A', subject: 'Math', year: '2023-2024' },
    { className: '8', section: 'B', subject: 'Math', year: '2023-2024' },
    // Add more data as needed
  ];

  const [tableData, setTableData] = useState([
    {
      rollno: 1,
      classSection: '8 A',
      name: 'Dhruv',
      totalStudents: 30,
      criticalThinking: 'High',
      values: 'Medium',
      socialContext: 'Low',
      creativity: 'High',
    },
    {
      rollno: 2,
      classSection: '8 B',
      name: 'Aditya Kumar',
      totalStudents: 25,
      criticalThinking: 'Medium',
      values: 'High',
      socialContext: 'Medium',
      creativity: 'Low',
    },
    {
      rollno: 3,
      classSection: '8 C',
      name: 'Pari',
      totalStudents: 28,
      criticalThinking: 'Low',
      values: 'High',
      socialContext: 'Medium',
      creativity: 'Medium',
    },
    {
      rollno: 4,
      classSection: '8 D',
      name: 'Kabir',
      totalStudents: 32,
      criticalThinking: 'High',
      values: 'Low',
      socialContext: 'High',
      creativity: 'Medium',
    },
    // Add more dummy data as needed
  ]);

  const [tableTitle,setTabletitle]=useState({ className: '8', section: 'A', subject: 'Math', year: '2023-2024' })


  const handleBoxClick = (clickedData) => {
    // Perform some action with the clicked data
    console.log('Box clicked:', clickedData);
    setTabletitle({ className: clickedData.className, section: clickedData.section, subject: clickedData.subject, year: clickedData.year })
  };
  

    return (
      <>
      <Navbar/>
      <Box m={2} width="100%">
        <Box>
          <DropdownClass classes={['6', '7', '8']} onChange={handleClassChange} />
          <DropdownSection sections={['A', 'B', 'C']} onChange={handleSectionChange} />
          <DropdownSubject subjects={['Math', 'Science', 'English']} onChange={handleSubjectChange} />
          <DropdownYear years={['2022-2023', '2023-2024', '2024-2025']} onChange={handleYearChange} />
        </Box>
        <br/>
        
        <Box style={{ display: 'flex', overflowX: 'auto' }}>
        {data.map((item, index) => 
          (
            // <BoxComponent key={index} data={item} />
          <Box
            sx={{
              border: 1,
              borderRadius: 2,
              padding: 2,
              marginRight: 2,
              minWidth: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            // onClick={handleBoxClick(item)}
          >
            <Typography variant="h6">{item.className}</Typography>
            <Typography>{`Section: ${item.section}`}</Typography>
            <Typography>{`Subject: ${item.subject}`}</Typography>
            <Typography>{`Year: ${item.year}`}</Typography>
            {/* TODO: not working */}
            <Button onClick={()=>handleBoxClick(item)}>View Details</Button>

          </Box>
          )
        )
        }
        </Box>
        <br/>

        {/* Student Records */}
        <TableContainer component={Paper}>
          <Table size="small"> {/* Use dense table */}
            <TableHead>
              <TableRow>
                <TableCell colSpan={6}>{tableTitle.className } {tableTitle.section}, {tableTitle.subject} ({tableTitle.year}) {<SearchBar/>} </TableCell>
              </TableRow>
            </TableHead>
            
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #ddd' }}>Roll number</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Name</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>P1</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>P2</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>P3</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>P4</TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.rollno} sx={{ '&:last-child td, &:last-child th': { borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' } }}>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.rollno}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.name}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.criticalThinking}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.values}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.socialContext}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.creativity}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Box>
    </>
    );
  };

export default ClassList;