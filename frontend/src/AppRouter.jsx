// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage.jsx';
import ClassList from  './pages/classlist.jsx'
import QuizList from './pages/quizlist.jsx';
import Results from './pages/results.jsx';
// import StudHomepage from './student/homepage.jsx';
// import AdminHomepage from './admin/homepage.jsx';
// import SetupPage from './admin/platformsetup.jsx';
// import StudentList from './teacher/class-list.jsx';
// import QuizListTeacher from './teacher/quiz-preview.jsx';
// import QuizListStudent from './student/quizzes.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class-list" element={<ClassList />} />
        <Route path="/quiz-list" element={<QuizList />} />
        <Route path="/results" element={<Results />} />
        {/* <Route path="/student" element={<StudHomepage />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/admin/setup" element={<SetupPage />} />
        <Route path="/teacher/class-list" element={<StudentList />} />
        <Route path='/teacher/quiz-preview' element={<QuizListTeacher/>}/>
        <Route path='/student/quizzes' element={<QuizListStudent/>}/> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
