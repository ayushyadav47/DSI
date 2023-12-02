// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ userRoles, selectedRole, handleRoleChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // Define menu items for each role
  const roleMenus = {
    student: [
      { key: "quiz-list", label: "Quiz List", to: "/quiz-list" },
      { key: "results", label: "Results", to: "/results" },
    ],
    teacher: [
      { key: "quiz-list", label: "Quiz List", to: "/quiz-list" },
      { key: "class-list", label: "Class List", to: "/class-list" },
      // { key: "subject-list", label: "Subject List", to: "/subject-list" },
      { key: "content-generation", label: "Content Generation", to: "http://localhost:5173" },
    ],
    admin: [
      { key: "quiz-list", label: "Quiz List", to: "/quiz-list" },
      { key: "class-list", label: "Class List", to: "/class-list" },
      // { key: "subject-list", label: "Subject List", to: "/subject-list" },
      // Remove Content Generation for Admin
    ],
    districtAdmin: [
      { key: "quiz-list", label: "Quiz List", to: "/quiz-list" },
      // { key: "subject-list", label: "Subject List", to: "/subject-list" },
      // Remove Content Generation for District Admin
      { key: "school-list", label: "School List", to: "/school-list" },
    ],
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Welcome!
          </Link>
        </Typography>

        {/* Render menu items directly in AppBar */}
        {roleMenus[selectedRole] &&
          roleMenus[selectedRole].map((menuItem) => (
            <Button
              key={menuItem.key}
              color="inherit"
              component={Link}
              to={menuItem.to}
              onClick={handleMenuClose}
            >
              {menuItem.label}
            </Button>
          ))}

        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {/* Render menu items in the Menu */}
          {roleMenus[selectedRole] &&
            roleMenus[selectedRole].map((menuItem) => (
              <MenuItem
                key={menuItem.key}
                component={Link}
                to={menuItem.to}
                onClick={handleMenuClose}
              >
                {menuItem.label}
              </MenuItem>
            ))}
        </Menu>

        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
