

import React from 'react';

const DropdownSubject = ({ subjects }) => {
  return (
    <select title="Subject">
      {subjects.map((subject, index) => (
        <option key={index} value={subject}>
          {subject}
        </option>
      ))}
    </select>
  );
};

export default DropdownSubject;