import ButtonAppBar from "../navbar/navbar.jsx";
import React , { useState } from 'react';
import {Collapse, Typography, List, ListItem, ListItemText, Container, Paper, Box } from '@mui/material';

// const students = [
//   { id: 1, name: 'Rahul' },
//   { id: 2, name: 'Priya' },
//   { id: 3, name: 'Aryan' },
//   // Add more students as needed
// ];

const students = [
    { id: 1, name: 'Alice', description: 'Roll number: 001' },
    { id: 2, name: 'Bob', description: 'Roll number: 002' },
    { id: 3, name: 'Charlie', description: 'Roll number: 003' },
    // Add more students as needed
  ];
  
  const StudentList = () => {
    const [expandedStudent, setExpandedStudent] = useState(null);
  
    const handleStudentClick = (studentId) => {
      if (expandedStudent === studentId) {
        setExpandedStudent(null);
      } else {
        setExpandedStudent(studentId);
      }
    };
  
    return (
      <Container>
        <ButtonAppBar/>
        <Box display="flex">
          <Box flexGrow={1}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Student List
              </Typography>
              <List>
                {students.map((student) => (
                  <div key={student.id}>
                    <ListItem button onClick={() => handleStudentClick(student.id)}>
                      <ListItemText primary={student.name} />
                    </ListItem>
                    <Collapse in={expandedStudent === student.id}>
                      <Box p={2} bgcolor="lightgray">
                        <Typography variant="body1">{student.description}</Typography>
                      </Box>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Paper>
          </Box>
          <Box width={100} p={2} bgcolor="lightgray">
            {/* This is the empty box displayed next to the student list */}
          </Box>
        </Box>
      </Container>
    );
  };
  
export default StudentList;
