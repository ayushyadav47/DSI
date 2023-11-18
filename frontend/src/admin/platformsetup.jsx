// src/components/SetupPage.js

import React, { useState } from 'react';
import ButtonAppBar from './setupmenu.jsx';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Papa from 'papaparse';  // Import Papaparse for CSV parsing
import api from '../api/setup-teacher.jsx'; // Update the path based on your project structure

const SetupPage = () => {
  const [userType, setUserType] = useState('teacher');
  const [file, setFile] = useState(null);
  const [csvContents, setCsvContents] = useState(null);  // State to store CSV contents

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Use Papaparse to read and parse CSV contents
    Papa.parse(uploadedFile, {
      complete: (result) => {
        setCsvContents(result.data);
        console.log('CSV Contents:', result.data);
      },
      header: true,  // Assuming CSV has a header row
    });
  };

  const handleSubmit = async () => {
    try {
      if (!file) {
        console.error('Please upload a CSV file.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      const response = await api.uploadCsv(formData);

      console.log('API Response:', response);

      // Add any additional handling after a successful upload
    } catch (error) {
      console.error(error.message);
      // Handle the error case
    }
  };

  return (
    <div style={{textAlign: 'center' }}>
      {/* Adjusted the style to stretch across the page */}
      <ButtonAppBar style={{ width: '100%' }} />
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h4">Setup Platform</Typography>
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Upload CSV File</Typography>
          <input type="file" accept=".csv" onChange={handleFileChange} style={{ margin: '10px 0' }} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Select user type:</Typography>
          <Button
            variant={userType === 'teacher' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleUserTypeChange('teacher')}
            style={{ margin: '0 10px' }}
          >
            Teacher
          </Button>
          <Button
            variant={userType === 'student' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleUserTypeChange('student')}
            style={{ margin: '0 10px' }}
          >
            Student
          </Button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
