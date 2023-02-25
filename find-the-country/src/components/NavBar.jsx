import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: "black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Find The Country
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
