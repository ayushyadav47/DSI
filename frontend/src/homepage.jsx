// Homepage.js

import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';

const Homepage = () => {
  const [selectedRoles, setSelectedRoles] = useState({
    student: false,
    teacher: false,
    admin: false,
    districtAdmin: false,
  });

  const handleRoleChange = (role) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [role]: !prevRoles[role],
    }));
  };

  return (
    <div>
      <div>
        <label>
          Student
          <input
            type="checkbox"
            checked={selectedRoles.student}
            onChange={() => handleRoleChange('student')}
          />
        </label>
        <label>
          Teacher
          <input
            type="checkbox"
            checked={selectedRoles.teacher}
            onChange={() => handleRoleChange('teacher')}
          />
        </label>
        <label>
          Admin
          <input
            type="checkbox"
            checked={selectedRoles.admin}
            onChange={() => handleRoleChange('admin')}
          />
        </label>
        <label>
          District Admin
          <input
            type="checkbox"
            checked={selectedRoles.districtAdmin}
            onChange={() => handleRoleChange('districtAdmin')}
          />
        </label>
      </div>

      <Navbar userRoles={selectedRoles} />
      
      {/* Rest of the homepage content */}
      <div>
        <h1>Welcome to the Homepage!</h1>
        {/* Other homepage content goes here */}
      </div>
    </div>
  );
};

export default Homepage;
