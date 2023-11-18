import React, { useState } from 'react';
import ChartRadar from '../navbar/radarchart.jsx';
import ChartLine from '../navbar/linechart.jsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

const RadarChartPanelStud = () => {
  const radarData1 = [
    { subject: 'Critical Thinking', A: 5 },
    { subject: 'Values', A: 3 },
    { subject: 'Social Context', A: 2 },
    { subject: 'Creativity', A: 4 },
  ];

  const radarData2 = [
    { subject: 'Critical Thinking', A: 4 },
    { subject: 'Values', A: 2 },
    { subject: 'Social Context', A: 3 },
    { subject: 'Creativity', A: 2 },
  ];

  const multiLineChartData = [
    { year: 'Apr', 'Critical Thinking': 30, 'Values': 40, 'Social Context': 25, 'Creativity': 30 },
    { year: 'May', 'Critical Thinking': 35, 'Values': 45, 'Social Context': 30, 'Creativity': 35 },
    { year: 'Jul', 'Critical Thinking': 40, 'Values': 50, 'Social Context': 35, 'Creativity': 30 },
    { year: 'Aug', 'Critical Thinking': 45, 'Values': 55, 'Social Context': 40, 'Creativity': 25 },
    { year: 'Sep', 'Critical Thinking': 50, 'Values': 60, 'Social Context': 45, 'Creativity': 30 },
  ];

  const intervalLabels = ['1 week', '2 weeks', '1 month'];

  const [intervalSize, setIntervalSize] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('Math'); // Default subject

  // Student menu state
  const [studentMenuAnchor, setStudentMenuAnchor] = useState(null);

  const handleIntervalSizeChange = (event, newValue) => {
    setIntervalSize(newValue);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleStudentMenuOpen = (event) => {
    setStudentMenuAnchor(event.currentTarget);
  };

  const handleStudentMenuClose = () => {
    setStudentMenuAnchor(null);
  };

  const paperStyle = {
    padding: '20px',
    flex: '1',
    background: 'linear-gradient(135deg, #E5E5E5, #D1D1D1)',
    margin: '10px',
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[0, 1, 2].map((index) => (
          <Paper
            key={index}
            elevation={3}
            style={paperStyle}
          >
            <Typography variant="h6" align="center">
              {index === 0 ? 'Latest Quiz' : index === 1 ? 'Performance Comparison by Subject' : 'Performance Comparison by Time'}
            </Typography>
            {index === 0 ? (
              <ChartRadar data={radarData1} />
            ) : index === 1 ? (
              <div style={centerStyle}>
                <div>
                  <Button
                    onClick={handleStudentMenuOpen}
                    variant="outlined"
                    color="primary"
                  >
                    + Select Subject
                  </Button>
                  <Menu
                    anchorEl={studentMenuAnchor}
                    open={Boolean(studentMenuAnchor)}
                    onClose={handleStudentMenuClose}
                  >
                    <MenuItem>Maths</MenuItem>
                    <MenuItem>Science</MenuItem>
                    <MenuItem>Social Science</MenuItem>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Telugu</MenuItem>
                  </Menu>
                </div>
                <ChartRadar data={radarData2} />
              </div>
            ) : (
              <div>
                <ChartLine data={multiLineChartData} dataKeys={['Critical Thinking', 'Values', 'Social Context', 'Creativity']} />
                <Typography variant="body2" align="center">Interval Size</Typography>
                <Slider
                  value={intervalSize}
                  min={0}
                  max={2}
                  step={1}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => intervalLabels[value]}
                  onChange={handleIntervalSizeChange}
                />
              </div>
            )}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default RadarChartPanelStud;
