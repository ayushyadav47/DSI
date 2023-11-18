// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = ({ userRoles }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Your Logo
          </Link>
        </Typography>

        {userRoles.student && (
          <>
            <Button color="inherit" component={Link} to="/quiz-list">
              Quiz List
            </Button>
            <Button color="inherit" component={Link} to="/results">
              Results
            </Button>
          </>
        )}

        {userRoles.teacher && (
          <>
            <Button color="inherit" component={Link} to="/quiz-list">
              Quiz List
            </Button>
            <Button color="inherit" component={Link} to="/class-list">
              Class List
            </Button>
            <Button color="inherit" component={Link} to="/subject-list">
              Subject List
            </Button>
            <Button color="inherit" component={Link} to="/content-generation">
              Content Generation
            </Button>
          </>
        )}

        {userRoles.admin && (
          <>
            <Button color="inherit" component={Link} to="/quiz-list">
              Quiz List
            </Button>
            <Button color="inherit" component={Link} to="/class-list">
              Class List
            </Button>
            <Button color="inherit" component={Link} to="/subject-list">
              Subject List
            </Button>
            <Button color="inherit" component={Link} to="/content-generation">
              Content Generation
            </Button>
          </>
        )}

        {userRoles.districtAdmin && (
          <>
            <Button color="inherit" component={Link} to="/quiz-list">
              Quiz List
            </Button>
            <Button color="inherit" component={Link} to="/class-list">
              Class List
            </Button>
            <Button color="inherit" component={Link} to="/subject-list">
              Subject List
            </Button>
            <Button color="inherit" component={Link} to="/content-generation">
              Content Generation
            </Button>
            <Button color="inherit" component={Link} to="/school-list">
              School List
            </Button>
          </>
        )}

        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
