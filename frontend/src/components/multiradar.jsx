import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const MultiPolygonChart = ({ data }) => {
  return (
    <div style={{justifyContent: 'center'}}>
      <RadarChart cx={100} cy={100} outerRadius={50} width={200} height={200} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 5]} />
        <Radar name="Chart1" dataKey="A" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Chart2" dataKey="B" fill="#82ca9d" fillOpacity={0.6} />
        <Radar name="Chart3" dataKey="C" fill="#ffc658" fillOpacity={0.6} />
        {/* You can add more Radar components with different dataKey and fill colors for additional pentagons */}
      </RadarChart>
    </div>
  );
};

export default MultiPolygonChart;
