import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import DropdownClass from './dropdown-class.jsx';
import DropdownSubject from './dropdown-subject.jsx';

const quizzes = [
  { id: 1, title: 'Mensuration' },
  { id: 2, title: 'Rational Numbers' },
  { id: 3, title: 'Linear Equations' }
  // add more quizzes as needed
];

const subjects = ['Math', 'Science']; // replace with your subjects
const classes = ['6', '7','8']; // replace with your classes


function handleQuizClick(quizId) {
  console.log(`Quiz ${quizId} selected`);
  // handle quiz selection here
  if (quizId === 1) {
    window.location.href = "http://your-desired-url.com";
  }
}



function QuizAccordion({role}) {
  const [textFieldValue, setTextFieldValue] = useState('');

  function handleTextFieldChange(e) {
    setTextFieldValue(e.target.value);
    console.log(`Text field value: ${e.target.value}`);
  }
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Quizzes</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <DropdownSubject subjects={subjects} />
          {role !== 'student' && <DropdownClass classes={classes} />}
          <TextField label="Search By Chapter" value={textFieldValue} onChange={handleTextFieldChange} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
        {quizzes.filter(quiz => textFieldValue === 'Mensuration' ? quiz.id === 1 : true).map(quiz => (
          <Button variant="outlined" onClick={() => handleQuizClick(quiz.id)} key={quiz.id}>
            {quiz.title}
          </Button>
        ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default QuizAccordion;