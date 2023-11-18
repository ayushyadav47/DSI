import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const ChartRadar = ({ data }) => {
  const radarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <div style={radarStyle}>
      <RadarChart cx={150} cy={150} outerRadius={80} width={300} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" fontSize={16} fill="#000" /> {/* Adjust fontSize and fill */}
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar name="Chart" dataKey="A" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};

export default ChartRadar;
