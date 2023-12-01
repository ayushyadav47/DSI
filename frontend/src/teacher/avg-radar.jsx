import React from 'react';
import MultiPolygonChart from '../components/multiradar.jsx'; // Adjust the path based on your project structure

const TeacherRadar = () => {
  const dummyData = [
    { subject: 'Critical Thinking', A: 4 },
    { subject: 'Values', A: 3 },
    { subject: 'Social Context', A: 5 },
    { subject: 'Creativity', A: 2 },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h2>Averages</h2> */}
      <MultiPolygonChart data={dummyData} />
    </div>
  );
};

export default TeacherRadar;
