import React from "react";


import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useToken } from "../../hooks/useToken";
import Content from "../../components/content/Contents";

const Home: React.FC = () => {
  const { email } = useToken((state) => state.auth.info);

  const handleLogout = () => {
    localStorage.setItem("token", "");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              MyBook
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Typography component='div' sx={{ mx: 1 }}>
                {email}
              </Typography>
              <Button color='inherit' onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Content />
    </>
  );
};

export default Home;
