// components/DropdownClass.jsx

import React from 'react';

const DropdownClass = ({ classes }) => {
  return (
    <select title="Class">
      {classes.map((classItem, index) => (
        <option key={index} value={classItem}>
          {classItem}
        </option>
      ))}
    </select>
  );
};

export default DropdownClass;