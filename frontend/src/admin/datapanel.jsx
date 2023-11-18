import React, { useState } from 'react';
import ChartRadar from '../navbar/radarchart.jsx';
import ChartLine from '../navbar/linechart.jsx'; // Import the multiline chart component
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const RadarChartPanel = () => {
  const radarData1 = [
    { subject: 'Critical Thinking', A: 5 },
    { subject: 'Values', A: 3 },
    { subject: 'Social Context', A: 2 },
    { subject: 'Creativity', A: 4 },
    // { subject: 'Label 5', A: 5 },
  ];

  const radarData2 = [
    { subject: 'Critical Thinking', A: 4 },
    { subject: 'Values', A: 2 },
    { subject: 'Social Context', A: 3 },
    { subject: 'Creativity', A: 2 },
    // { subject: 'Label 5', A: 4 },
  ];

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

  const handleChartHover = (index) => {
    setHoveredChart(index);
  };

  const handleChartLeave = () => {
    setHoveredChart(null);
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
              {index === 0 ? 'Subject Wise Comparison by Grade' : index === 1 ? 'Parameter Wise Comparison by Subject' : 'Platform Usage'}
            </Typography>
            {index === 0 ? (
              <ChartRadar data={radarData1} />
            ) : index === 1 ? (
              <ChartRadar data={radarData2} />
            ) : (
              <ChartLine data={multiLineChartData} dataKeys={['Critical Thinking', 'Values', 'Social Context','Creativity']} />
            )}
            {hoveredChart === index && (
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'white', padding: '10px', boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.2)' }}>
                <Typography variant="body1" align="center">Data for {index === 0 ? 'Subject Wise Comparison by Grade' : index === 1 ? 'Parameter Wise Comparison by Subject' : 'Platform Usage'}:</Typography>
                {index !== 2 && (index === 0 ? radarData1 : radarData2).map((datapoint, i) => (
                  <Typography key={i} variant="body2" align="center">{datapoint.subject}: {datapoint.A}</Typography>
                ))}
                {index === 2 && multiLineChartData.map((datapoint, i) => (
                  <Typography key={i} variant="body2" align="center">{datapoint.year}: {datapoint['Critical Thinking']}, {datapoint['Values']}, {datapoint['Social Context']}, {datapoint['Creativity']}</Typography>
                ))}
              </div>
            )}
            {/* {index === 1 && (
              <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}>
                <Button variant="contained" color="primary">
                  View Details
                </Button>
              </div>
            )} */}
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default RadarChartPanel;
