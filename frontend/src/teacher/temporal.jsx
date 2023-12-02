import React from 'react';
import ChartLine from '../components/linechart.jsx'; // Adjust the path based on your project structure

const TeacherTemporal = () => {
  // Dummy data with months
  const dummyData = [    
    { month: 'April', 'Critical Thinking': 45, 'Values': 60, 'Social Context': 30, 'Creativity': 75 },
    { month: 'May', 'Critical Thinking': 50, 'Values': 65, 'Social Context': 35, 'Creativity': 80 },
    { month: 'June', 'Critical Thinking': 40, 'Values': 55, 'Social Context': 25, 'Creativity': 70 },
    { month: 'July', 'Critical Thinking': 35, 'Values': 50, 'Social Context': 20, 'Creativity': 65 },
  ];
  
  const dataKeys = ['Critical Thinking', 'Values', 'Social Context', 'Creativity'];

  return (
    <div>
      {/* <h2>Line Chart Example</h2> */}
      <ChartLine data={dummyData} dataKeys={dataKeys} />
    </div>
  );
};

export default TeacherTemporal;
