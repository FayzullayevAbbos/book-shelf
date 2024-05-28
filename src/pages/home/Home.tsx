import { Box, CssBaseline } from "@mui/material";

import { Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";




function Home() {
 

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <SideBar />
        <Box component='main' sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Outlet />
        </Box>
      </Box>

    </>
  );
}

export default Home;
