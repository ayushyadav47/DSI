import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartLine = ({ data, dataKeys }) => {
  // Define specific colors for each data key
  const lineColors = ['#FF5733', '#3498DB', '#27AE60', '#F1C40F'];

  return (
    <div style={{justifyContent: 'center'}}>
      <LineChart width={200} height={200} data={data}>
        {/* Change XAxis to represent months */}
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        {/* <Tooltip /> */}
        <Legend />
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={lineColors[index % lineColors.length]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default ChartLine;
