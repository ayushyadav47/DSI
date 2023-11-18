import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FunctionsPanel = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  };

  const boxStyle = {
    flex: '1',
    padding: '20px',
    background: 'linear-gradient(135deg, #E5E5E5, #D1D1D1)',
    height: '200px',
    width: '200px',
    position: 'relative',
    overflow: 'hidden',
  };

  const sliderStyle = {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    transition: 'transform 0.3s',
  };

  const slideStyle = {
    flex: '1',
    minWidth: '200px',
    textAlign: 'center',
  };

  const classData = ['8A', '8B', '8C', '8D', '7D'];
  const quizData = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5'];

  const [classSliderPosition, setClassSliderPosition] = useState(0);
  const [quizSliderPosition, setQuizSliderPosition] = useState(0);

  const slideLeft = (type) => {
    if (type === 'class' && classSliderPosition > 0) {
      setClassSliderPosition(classSliderPosition - 1);
    } else if (type === 'quiz' && quizSliderPosition > 0) {
      setQuizSliderPosition(quizSliderPosition - 1);
    }
  };

  const slideRight = (type) => {
    if (
      (type === 'class' && classSliderPosition < classData.length - 1) ||
      (type === 'quiz' && quizSliderPosition < quizData.length - 1)
    ) {
      if (type === 'class') {
        setClassSliderPosition(classSliderPosition + 1);
      } else {
        setQuizSliderPosition(quizSliderPosition + 1);
      }
    }
  };

  const selectItem = (type, index) => {
    if (type === 'class') {
      // Handle class item selection
      console.log(`Selected class: ${classData[index]}`);
    } else {
      // Handle quiz item selection
      console.log(`Selected quiz: ${quizData[index]}`);
    }
  };

  const seeAll = () => {
    console.log('See All');
  };

  return (
    <div style={containerStyle}>
      <Paper elevation={0} style={boxStyle}>
        <Typography variant="h6" align="center">Class List</Typography>
        <div style={sliderStyle}>
          {classData.map((item, index) => (
            <Button
              key={index}
              style={slideStyle}
              onClick={() => selectItem('class', index)}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          variant="outlined"
          color="primary"
          onClick={seeAll}
        >
          See All
        </Button>
        {classSliderPosition > 0 && (
          <Button
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => slideLeft('class')}
          >
            &lt; {/* Left arrow */}
          </Button>
        )}
        {classSliderPosition < classData.length - 1 && (
          <Button
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => slideRight('class')}
          >
            &gt; {/* Right arrow */}
          </Button>
        )}
      </Paper>
      
      <Paper elevation={0} style={boxStyle}>
        <Typography variant="h6" align="center">Quiz List</Typography>
        <div style={sliderStyle}>
          {quizData.map((item, index) => (
            <Button
              key={index}
              style={slideStyle}
              onClick={() => selectItem('quiz', index)}
            >
              {item}
            </Button>
          ))}
        </div>
        <Button
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          variant="outlined"
          color="primary"
          onClick={seeAll}
        >
          See All
        </Button>
        {quizSliderPosition > 0 && (
          <Button
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => slideLeft('quiz')}
          >
            &lt; {/* Left arrow */}
          </Button>
        )}
        {quizSliderPosition < quizData.length - 1 && (
          <Button
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => slideRight('quiz')}
          >
            &gt; {/* Right arrow */}
          </Button>
        )}
      </Paper>
    </div>
  );
};

export default FunctionsPanel;
