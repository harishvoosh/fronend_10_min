import * as React from 'react';

// importing material UI components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

export default function Headerback() {
  return (
    <Box>
      <AppBar
        position="static"
        // position="fixed"

        style={{ background: '#fff', boxShadow: 'inherit' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ color: '#FF6A2D' }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
