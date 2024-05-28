import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/add-book">
          <ListItemText primary="Add Book" />
        </ListItem>
        <ListItem button component={Link} to="/all-books">
          <ListItemText primary="All Books" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
