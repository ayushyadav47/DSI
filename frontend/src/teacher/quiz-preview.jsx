import ButtonAppBar from "../navbar/navbar.jsx";
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Container, Paper, Box, Collapse, Button } from '@mui/material';

const quizzes = [
  { id: 1, title: 'Math Chapter 1, Topic: A', description: 'A quiz to test your math skills.<br /> Q1. First Question <br /> Answer. 10 <br /> Q2. Second Question <br /> Answer. Africa', buttonLabel: 'Start Quiz' },
  { id: 2, title: 'Math Chapter 1, Topic: B', description: 'A quiz to test your math skills.', buttonLabel: 'Start Quiz' },
  { id: 3, title: 'Math Chapter 1, Topic: C', description: 'A quiz to test your math skills.', buttonLabel: 'Start Quiz' },
  // Add more quizzes as needed
];

const QuizList = () => {
  const [expandedQuiz, setExpandedQuiz] = useState(null);

  const handleQuizClick = (quizId) => {
    if (expandedQuiz === quizId) {
      setExpandedQuiz(null);
    } else {
      setExpandedQuiz(quizId);
    }
  };

  return (
    <Container>
      <ButtonAppBar />
      <Box display="flex">
        <Box flexGrow={1}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Quiz List
            </Typography>
            <List>
              {quizzes.map((quiz) => (
                <div key={quiz.id}>
                  <ListItem button onClick={() => handleQuizClick(quiz.id)}>
                    <ListItemText primary={quiz.title} />
                  </ListItem>
                  <Collapse in={expandedQuiz === quiz.id}>
                    <Box p={2} bgcolor="lightgray">
                      <Typography variant="body1">
                        {quiz.description.split('<br />').map((line, index) => (
                          <React.Fragment key={index}>
                            {index > 0 && <br />}
                            {line}
                          </React.Fragment>
                        ))}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {quiz.buttonLabel}
                      </Button>
                    </Box>
                  </Collapse>
                </div>
              ))}
            </List>
          </Paper>
        </Box>
        {/* Panel on the right side */}
        <Box width={200} p={2} bgcolor="lightblue">
          {/* <Typography variant="h6" gutterBottom>
            Panel Title
          </Typography>
          <Typography variant="body1">
            Panel Content
          </Typography> */}
        </Box>
      </Box>
    </Container>
  );
};

export default QuizList;
