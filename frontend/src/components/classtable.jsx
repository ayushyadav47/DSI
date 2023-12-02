// classtable.jsx

import React, { useState } from 'react';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button, Box } from '@mui/material';
import DropdownSubject from './dropdown-subject.jsx';
import DropdownClass from './dropdown-class.jsx';

const ClassTable = ({ userRole }) => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      classSection: '8 A',
      subject: 'Math',
      totalStudents: 30,
      criticalThinking: 'High',
      values: 'Medium',
      socialContext: 'Low',
      creativity: 'High',
    },
    {
      id: 2,
      classSection: '8 B',
      subject: 'English',
      totalStudents: 25,
      criticalThinking: 'Medium',
      values: 'High',
      socialContext: 'Medium',
      creativity: 'Low',
    },
    {
      id: 3,
      classSection: '8 C',
      subject: 'Science',
      totalStudents: 28,
      criticalThinking: 'Low',
      values: 'High',
      socialContext: 'Medium',
      creativity: 'Medium',
    },
    {
      id: 4,
      classSection: '8 D',
      subject: 'History',
      totalStudents: 32,
      criticalThinking: 'High',
      values: 'Low',
      socialContext: 'High',
      creativity: 'Medium',
    },
    {
      id: 5,
      classSection: '8 E',
      subject: 'Art',
      totalStudents: 20,
      criticalThinking: 'Medium',
      values: 'Medium',
      socialContext: 'High',
      creativity: 'High',
    },
    // Add more dummy data as needed
  ]);

  const [displayedRows, setDisplayedRows] = useState(3);
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(true);
    setDisplayedRows(tableData.length);
  };

  const handleReduceSize = () => {
    setViewAll(false);
    setDisplayedRows(3);
  };
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleViewAnalysis = (rowId) => {
    console.log(`View Analysis clicked for row with ID: ${rowId}`);
    // Handle the click on the "View Analysis" button
    // You can navigate to the analysis page or show a modal, etc.
  };

  return userRole === 'teacher' ? (
    
    <Box m={2} width="100%">
      <>
      
      
        {/* <Typography variant="h5" gutterBottom>
          Classes
        </Typography> */}
        <DropdownClass classes={['6', '7', '8']} onChange={handleClassChange} />
        <DropdownSubject subjects={['Math', 'Science', 'English']} onChange={handleSubjectChange} />
        <br/>
        {viewAll ? (
          <Button variant="outlined" onClick={handleReduceSize}>
            Reduce Size
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleViewAll}>
            View All
          </Button>
        )}
        <TableContainer component={Paper}>
          <Table size="small"> {/* Use dense table */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #ddd' }}>Class/Section</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Subject</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Total Students</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Critical Thinking</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Values</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Social Context</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>Creativity</TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(0, displayedRows).map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd' } }}>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.classSection}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.subject}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.totalStudents}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.criticalThinking}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.values}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.socialContext}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>{row.creativity}</TableCell>
                  <TableCell sx={{ border: '1px solid #ddd' }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleViewAnalysis(row.id)}
                      sx={{ height: '24px', fontSize: '10px' }}
                    >View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </>
    </Box>
  ) : (
    <div>You do not have access to view this table.</div>
  );
};

export default ClassTable;
