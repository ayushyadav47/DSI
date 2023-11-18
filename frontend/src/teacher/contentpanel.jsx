import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'; // Import Button component

const ContentGenerationPanel = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    margin: '10px',
  };

  const boxStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, #E5E5E5, #D1D1D1)',
    width: '100%', // Occupy the full width
    position: 'relative',
    overflow: 'hidden',
  };

  const dropdownStyle = {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row', // Align labels and dropdowns horizontally
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align the button to the left
    marginBottom: '10px',
    marginLeft: '20px', // Add left margin to separate it from the dropdowns
  };

  const retrieveButtonStyle = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  };

  // Define available options for Grade, Section, and Subject
  const gradeOptions = ['6', '7', '8'];
  const sectionOptions = ['A', 'B', 'C', 'D', 'E', 'F'];
  const subjectOptions = ['Math', 'Science', 'Social Studies', 'English', 'Telugu'];

  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Define the topics for Grade 8, Section A, Subject Math
  const grade8SectionA_MathTopics = [
    'Chapter 1 - Rational Numbers',
    'Chapter 2 - Linear Equations in One Variable',
    'Chapter 3 - Understanding Quadrilaterals',
    'Chapter 4 - Practical Geometry',
    'Chapter 5 - Data Handling',
    'Chapter 6 - Square and Square Roots',
    'Chapter 7 - Cube and Cube Roots',
    'Chapter 8 - Comparing Quantities',
    'Chapter 9 - Algebraic Expressions and Identities',
    'Chapter 10 - Visualizing Solid Shapes',
    'Chapter 11 - Mensuration',
    'Chapter 12 - Exponents and Powers',
    'Chapter 13 - Direct and Inverse Proportions',
    'Chapter 14 - Factorization',
    'Chapter 15 - Introduction to Graphs',
    'Chapter 16 - Playing with Numbers',
  ];

  // Function to update the selected grade
  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
    // Reset the selected topic when grade changes
    setSelectedTopic('');
  };

  // Function to update the selected section
  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
    // Reset the selected topic when section changes
    setSelectedTopic('');
  };

  // Function to update the selected subject
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    // Reset the selected topic when subject changes
    setSelectedTopic('');
  };

  // Function to retrieve existing content
  const handleRetrieveContent = () => {
    // Add logic to retrieve existing content
    console.log('Retrieving existing content...');
  };

  // Function to generate new content
  const handleGenerateContent = () => {
    // Add logic to generate new content
    console.log('Generating new content...');
  };

  return (
    <div style={containerStyle}>
      <Paper elevation={0} style={boxStyle}>
        <Typography variant="h6" align="center">Content Generation</Typography>
        <div style={dropdownStyle}>
          <div style={{ marginRight: '20px' }}>
            <Typography variant="subtitle1">Grade:</Typography>
            <Select
              label="Grade"
              variant="outlined"
              value={selectedGrade}
              onChange={handleGradeChange}
            >
              {gradeOptions.map((grade) => (
                <MenuItem key={grade} value={grade}>
                  {grade}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ marginRight: '20px' }}>
            <Typography variant="subtitle1">Section:</Typography>
            <Select
              label="Section"
              variant="outlined"
              value={selectedSection}
              onChange={handleSectionChange}
            >
              {sectionOptions.map((section) => (
                <MenuItem key={section} value={section}>
                  {section}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ marginRight: '20px' }}>
            <Typography variant="subtitle1">Subject:</Typography>
            <Select
              label="Subject"
              variant="outlined"
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              {subjectOptions.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </div>
          {selectedGrade === '8' && selectedSubject === 'Math' && (
            <div>
              <Typography variant="subtitle1">Topic:</Typography>
              <Select
                label="Topic"
                variant="outlined"
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value)}
              >
                {grade8SectionA_MathTopics.map((topic) => (
                  <MenuItem key={topic} value={topic}>
                    {topic}
                  </MenuItem>
                ))}
              </Select>
            </div>
          )}
        </div>
        <div style={buttonContainerStyle}>
          <Button
            variant="contained"
            onClick={handleGenerateContent}
          >
            Generate New Content
          </Button>
        </div>
        <Button
          style={retrieveButtonStyle}
          variant="contained"
          onClick={handleRetrieveContent}
        >
          Retrieve Content
        </Button>
      </Paper>
    </div>
  );
};

export default ContentGenerationPanel;
