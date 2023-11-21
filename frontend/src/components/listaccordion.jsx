import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClassTable from './classtable.jsx';
// import QuizTable from './quiztable.jsx'; // Assuming you have a QuizTable component
import { styled } from '@mui/system';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  width: '100%', // Set width to 100% to fill the parent container
}));

const AccordionList = ({ onAccordionClick, selectedRole }) => {
  const [isClassTableVisible, setIsClassTableVisible] = useState(false);
  const [isQuizTableVisible, setIsQuizTableVisible] = useState(false);

  const handleAccordionClick = (accordionName) => {
    onAccordionClick(accordionName);

    // Toggle the visibility of ClassTable and QuizTable based on the accordionName
    setIsClassTableVisible(selectedRole === 'teacher' && accordionName === 'classList');
    // setIsQuizTableVisible(selectedRole === 'teacher' && accordionName === 'quizList');
  };

  return (
    <div>
      <CustomAccordion onClick={() => handleAccordionClick('quizList')}>
        <CustomAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="quiz-list-content" id="quiz-list-header">
          <Typography>Quiz List</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          {isQuizTableVisible && <ClassTable />}

          {/* Dummy Quiz Data */}
          <List>
            <ListItem>
              <ListItemText primary="Quiz 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Quiz 2" />
            </ListItem>
            {/* Add more quiz items as needed */}
          </List>
        </CustomAccordionDetails>
      </CustomAccordion>

      <CustomAccordion onClick={() => handleAccordionClick('classList')}>
        <CustomAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="class-list-content" id="class-list-header">
          <Typography>Class List</Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          {isClassTableVisible && <ClassTable userRole={selectedRole} />}

          {/* Dummy Class Data */}
          <List>
            <ListItem>
              <ListItemText primary="Class A" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Class B" />
            </ListItem>
            {/* Add more class items as needed */}
          </List>
        </CustomAccordionDetails>
      </CustomAccordion>
    </div>
  );
};

export default AccordionList;
