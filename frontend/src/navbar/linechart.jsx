import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartLine = ({ data, dataKeys }) => {
  // Define specific colors for each data key
  const lineColors = ['#FF5733', '#3498DB', '#27AE60', '#F1C40F'];

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="year" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      {dataKeys.map((key, index) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={lineColors[index % lineColors.length]} // Use specific colors from the array
          activeDot={{ r: 8 }}
        />
      ))}
    </LineChart>
  );
};

export default ChartLine;
