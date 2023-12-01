import React from 'react';
import ChartLine from '../components/linechart.jsx'; // Adjust the path based on your project structure

const TeacherTemporal = () => {
  // Dummy data with months
  const dummyData = [    
    { month: 'April', data1: 45, data2: 60, data3: 30, data4: 75 },
    { month: 'May', data1: 50, data2: 65, data3: 35, data4: 80 },
    { month: 'June', data1: 40, data2: 55, data3: 25, data4: 70 },
    { month: 'July', data1: 35, data2: 50, data3: 20, data4: 65 },
  ];

  // Specify the data keys to be displayed
  const dataKeys = ['data1', 'data2', 'data3', 'data4'];

  return (
    <div>
      {/* <h2>Line Chart Example</h2> */}
      <ChartLine data={dummyData} dataKeys={dataKeys} />
    </div>
  );
};

export default TeacherTemporal;
