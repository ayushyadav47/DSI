// homepage.jsx

import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import AccordionList from './components/listaccordion.jsx';
import ClassTable from './components/classtable.jsx';

const Homepage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [showClassTable, setShowClassTable] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setShowClassTable(false); // Reset the visibility of ClassTable when role changes
    setActiveAccordion(null);
  };

  const handleAccordionClick = (accordionName) => {
    // Show ClassTable only if the accordionName is "classList" and teacher role is selected
    setShowClassTable(selectedRole === 'teacher' && accordionName === 'classList');
    setActiveAccordion(accordionName);
  };

  return (
    <div>
      <div>
        <label>
          Student
          <input
            type="radio"
            name="role"
            value="student"
            checked={selectedRole === 'student'}
            onChange={() => handleRoleChange('student')}
          />
        </label>
        <label>
          Teacher
          <input
            type="radio"
            name="role"
            value="teacher"
            checked={selectedRole === 'teacher'}
            onChange={() => handleRoleChange('teacher')}
          />
        </label>
        <label>
          Admin
          <input
            type="radio"
            name="role"
            value="admin"
            checked={selectedRole === 'admin'}
            onChange={() => handleRoleChange('admin')}
          />
        </label>
        <label>
          District Admin
          <input
            type="radio"
            name="role"
            value="districtAdmin"
            checked={selectedRole === 'districtAdmin'}
            onChange={() => handleRoleChange('districtAdmin')}
          />
        </label>
      </div>

      <Navbar userRoles={{ [selectedRole]: true }} selectedRole={selectedRole} handleRoleChange={handleRoleChange} />

      <AccordionList onAccordionClick={handleAccordionClick} />

      {/* Conditionally render ClassTable based on selected role and accordion click */}
      {selectedRole && showClassTable && <ClassTable userRole={selectedRole} />}

      {/* Rest of the homepage content */}
      <div>
        <h1>Homepage placeholder</h1>
        {/* Other homepage content goes here */}
      </div>
    </div>
  );
};

export default Homepage;
