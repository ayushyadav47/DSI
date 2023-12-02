import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import AccordionList from './components/listaccordion.jsx';
import ClassTable from './components/classtable.jsx';
import TeacherRadar from './teacher/avg-radar.jsx'; // Adjust the path based on your project structure
import TeacherTemporal from './teacher/temporal.jsx'; // Adjust the path based on your project structure
import DropdownSubject from './components/dropdown-subject.jsx'; // Adjust the path based on your project structure
import DropdownClass from './components/dropdown-class.jsx';
import QuizAccordion from './components/listaccordion.jsx';

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

  const subjects = ['Mathematics','Science'];
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
        <div style={{ flex: '70%', paddingRight: '16px' }}>
          {/* <AccordionList onAccordionClick={handleAccordionClick} /> */}
          {selectedRole === 'teacher' && (
            <>
            <div style={{ marginTop: '16px' }}>
              <ClassTable userRole={selectedRole} />
            </div>
            <div style={{ marginTop: '16px' }}>
              <QuizAccordion onAccordionClick={handleAccordionClick} />
            </div>
            </>
          )}
          {selectedRole === 'student' && <QuizAccordion role={selectedRole} />}
        </div>
        
        {/* Always render TeacherRadar on the right 1/4th */}
        <div style={{ flex: '30%', borderLeft: '1px solid black' }}>
          <div style={{ display: 'flex'}}>
            <DropdownSubject subjects={subjects} />
            <DropdownClass classes={['6', '7', '8']} />
          </div>
          <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', paddingLeft: '40px' }}>
            <TeacherRadar />
          </div>
          <div style={{ width: '100%', maxWidth: '100%', margin: '0 auto', paddingLeft: '40px' }}>
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
