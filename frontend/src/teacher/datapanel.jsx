import React, { useState } from 'react';
import MultiPolygonChart from '../navbar/multiradar.jsx';
import ChartLine from '../navbar/linechart.jsx';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const RadarChartPanelTeach = () => {
  const radarData1 = [
    { subject: 'Critical Thinking', A: 5 },
    { subject: 'Values', A: 3 },
    { subject: 'Social Context', A: 2 },
    { subject: 'Creativity', A: 4 },
  ];

  const radarData2 = [
    { subject: 'Critical Thinking 1', A: 4 },
    { subject: 'Values', A: 2 },
    { subject: 'Social Context', A: 3 },
    { subject: 'Creativity', A: 2 },
  ];

  const multiPolygonData1 = [
    { subject: 'Critical Thinking', A: 3},
    { subject: 'Values', A: 2},
    { subject: 'Social Context', A: 4},
    { subject: 'Creativity', A: 5},
  ];

  const multiPolygonData2 = [
    { subject: 'Critical Thinking', A: 4, B: 2 },
    { subject: 'Values', A: 2, B: 4 },
    { subject: 'Social Context', A: 3, B: 2 },
    { subject: 'Creativity', A: 4, B: 3 },
  ];

    // Replace with the actual categories
    const multiLineChartData = [
      { year: 'Apr', 'Critical Thinking': 30, 'Values': 40, 'Social Context': 25, 'Creativity': 30 },
      { year: 'May', 'Critical Thinking': 35, 'Values': 45, 'Social Context': 30, 'Creativity': 35 },
      { year: 'Jul', 'Critical Thinking': 40, 'Values': 50, 'Social Context': 35, 'Creativity': 30 },
      { year: 'Aug', 'Critical Thinking': 45, 'Values': 55, 'Social Context': 40, 'Creativity': 25 },
      { year: 'Sep', 'Critical Thinking': 50, 'Values': 60, 'Social Context': 45, 'Creativity': 30 },
    ];

  const paperStyle = {
    padding: '20px',
    flex: '1',
    background: 'linear-gradient(135deg, #E5E5E5, #D1D1D1)',
    margin: '10px',
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  };

  const [hoveredChart, setHoveredChart] = useState(null);
  const [studentMenuAnchor, setStudentMenuAnchor] = useState(null);
  const [intervalSize, setIntervalSize] = useState(1);
  const [gradeAverageChecked, setGradeAverageChecked] = useState(false);
  const [sectionAverageChecked, setSectionAverageChecked] = useState(false);

  const intervalLabels = ['1 week', '2 weeks', '1 month'];

  const handleChartHover = (index) => {
    setHoveredChart(index);
  };

  const handleChartLeave = () => {
    setHoveredChart(null);
  };

  const handleStudentMenuOpen = (event) => {
    setStudentMenuAnchor(event.currentTarget);
  };

  const handleStudentMenuClose = () => {
    setStudentMenuAnchor(null);
  };

  const handleIntervalSizeChange = (event, newValue) => {
    setIntervalSize(newValue);
  };

  const handleGradeAverageChange = (event) => {
    setGradeAverageChecked(event.target.checked);
  };

  const handleSectionAverageChange = (event) => {
    setSectionAverageChecked(event.target.checked);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[0, 1, 2].map((index) => (
          <Paper
            key={index}
            elevation={3}
            style={paperStyle}
            onMouseEnter={() => handleChartHover(index)}
            onMouseLeave={handleChartLeave}
          >
            <Typography variant="h6" align="center">
              {index === 0 && 'Latest Quiz'}
              {index === 1 && (
                <div>
                  Student Performance Comparison
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button onClick={handleStudentMenuOpen}>+ Select Student</Button>
                  </div>
                  <Menu
                    anchorEl={studentMenuAnchor}
                    open={Boolean(studentMenuAnchor)}
                    onClose={handleStudentMenuClose}
                  >
                    <MenuItem>Average of Grade</MenuItem>
                    <MenuItem>Average of Class</MenuItem>
                    <MenuItem>Akash Singh</MenuItem>
                    <MenuItem>Abhinav Malhotra</MenuItem>
                    <MenuItem>Siddhant Jain</MenuItem>
                  </Menu>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gradeAverageChecked}
                          onChange={handleGradeAverageChange}
                          name="gradeAverage"
                        />
                      }
                      label="Grade Average"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={sectionAverageChecked}
                          onChange={handleSectionAverageChange}
                          name="sectionAverage"
                        />
                      }
                      label="Section Average"
                    />
                  </div>
                </div>
              )}
              {index === 2 && 'Temporal Analysis'}
            </Typography>
            {index === 0 ? (
              <MultiPolygonChart data={multiPolygonData1} />
            ) : index === 1 ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MultiPolygonChart data={multiPolygonData2} />
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

export default RadarChartPanelTeach;
