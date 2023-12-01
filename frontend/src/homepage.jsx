import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import AccordionList from './components/listaccordion.jsx';
import ClassTable from './components/classtable.jsx';
import TeacherRadar from './teacher/avg-radar.jsx'; // Adjust the path based on your project structure
import TeacherTemporal from './teacher/temporal.jsx'; // Adjust the path based on your project structure
import DropdownSubject from './components/dropdown-subject.jsx'; // Adjust the path based on your project structure
import DropdownClass from './components/dropdown-class.jsx';

const Homepage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setActiveAccordion(null);
  };

  const handleAccordionClick = (accordionName) => {
    setActiveAccordion(accordionName);
  };

  const subjects = ['Subject 1', 'Subject 2', 'Subject 3'];
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

      <div style={{ display: 'flex', marginTop: '16px' }}>
        <div style={{ flex: '75%', paddingRight: '16px' }}>
          {/* <AccordionList onAccordionClick={handleAccordionClick} /> */}
          {/* Conditionally render ClassTable based on selected role and accordion click */}
          {selectedRole === 'teacher' && (
            <div style={{ marginTop: '16px' }}>
              <ClassTable userRole={selectedRole} />
            </div>
          )}
        </div>
        
        {/* Always render TeacherRadar on the right 1/4th */}
        <div style={{ flex: 1, borderLeft: '1px solid black', overflow: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DropdownSubject subjects={subjects} />
            <DropdownClass classes={['Class 1', 'Class 2', 'Class 3']} />
          </div>
          <div style={{ width: '100%', maxWidth: '100%' }}>
            <TeacherRadar />
          </div>
          <div style={{ width: '100%', maxWidth: '100%' }}>
            <TeacherTemporal />
          </div>
        </div>
      </div>

      {/* Rest of the homepage content */}
      <div>
        <h1>Homepage placeholder</h1>
        {/* Other homepage content goes here */}
      </div>
    </div>
  );
};

export default Homepage;
