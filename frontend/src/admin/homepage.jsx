import React from 'react';
// import ButtonAppBar from '../navbar/navbar.jsx';
import RadarChartPanel from '../admin/datapanel.jsx';
import ButtonAppBar from './setupmenu.jsx'; // Import the new SetupButton component

function AdminHomepage() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <RadarChartPanel />
      </header>
    </div>
  );
}

export default AdminHomepage;
