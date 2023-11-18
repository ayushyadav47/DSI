import ButtonAppBar from "../navbar/navbar.jsx";
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Container, Paper, Box, Collapse, Button } from '@mui/material';

const quizzes = [
  { id: 1, title: 'Math Chapter 1, Topic: A', description: 'A quiz to test your math skills.', buttonLabel: 'Start Quiz' },
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
                      <Typography variant="body1" dangerouslySetInnerHTML={{ __html: quiz.description }} />
                      {/* <Box>
                        Graph of last quiz
                      </Box> */}
                      <Button variant="contained" color="primary">
                        Start Quiz
                      </Button>
                    </Box>
                  </Collapse>
                </div>
              ))}
            </List>
          </Paper>
        </Box>
        {/* Visible empty vertical container */}
        <Box width={200} bgcolor="lightblue" />
      </Box>
    </Container>
  );
};

export default QuizList;
