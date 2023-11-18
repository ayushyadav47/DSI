// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './teacher/homepage.jsx';
import StudHomepage from './student/homepage.jsx';
import AdminHomepage from './admin/homepage.jsx';
import SetupPage from './admin/platformsetup.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/teacherhome" element={<Homepage />} />
        <Route path="/studhome" element={<StudHomepage />} />
        <Route path="/adminhome" element={<AdminHomepage />} />
        <Route path="/adminhome/setup" element={<SetupPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
