

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

const ExpandableMenus = ({ role }) => {
  const menuItems = {
    districtAdmin: [
      {
        label: 'School List',
        to: '/school-list',
      },
    ],
    schoolAdmin: [
      {
        label: 'Class List',
        to: '/class-list',
      },
      {
        label: 'Student List',
        to: '/student-list',
      },
    ],
    teacher: [
      {
        label: 'Class List',
        to: '/class-list',
      },
      {
        label: 'Student List',
        to: '/student-list',
      },
    ],
  };

  return (
    <div>
      {menuItems[role] && (
        <List>
          {menuItems[role].map((menuItem, index) => (
            <ListItem key={index} button component={Link} to={menuItem.to}>
              <ListItemText primary={menuItem.label} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default ExpandableMenus;
