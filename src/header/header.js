import * as React from 'react';
import { Link } from 'react-router-dom';
// importing material UI components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header1 from './header1';

export default function Header() {
  return (
    <>
      <AppBar
        position="sticky"
        // position="fixed"

        style={{
          background: '#83ADFF',
          boxShadow: 'inherit',
        }}
      >
        <Toolbar>
          <Link to="sidemenu">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <select
            id="dropdown"
            style={{
              backgroundColor: '#4A88C8',
              borderRadius: '8px',
              height: '32px',
              width: '172px',
              color: '#fff',
            }}
          >
            <option value="N/A"> Home-24th Main</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </Toolbar>
      </AppBar>
      <Header1 />
    </>
  );
}
