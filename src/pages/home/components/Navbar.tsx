import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthRemoveAction } from '../../../redax/actions/auth';
import { useDispatch } from 'react-redux';

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(AuthRemoveAction());
    localStorage.setItem("token", "");
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          myBooks
        </Typography>
        <Button onClick={handleLogout} color="inherit" sx={{ marginLeft: 'auto' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
