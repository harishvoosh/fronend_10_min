import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Homecard from '../card/card';
import Header from '../header/header';

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div
        style={{
          // backgroundColor: '#fff',

          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          marginTop: '-60px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'grid',
        }}
      >
        <Homecard />
        <Homecard />
        <Homecard />
        <Homecard />
        <Homecard />
        <Homecard />
        {/* View full menu */}
        <Link to="fullmenu">
          <Card style={{ margin: '16px', height: '60px' }}>
            <Box>
              <CardContent
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography fontSize={'14px'} fontWeight="700">
                  View full menu
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 0.5 }}
                  style={{ color: '#898D91' }}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </CardContent>
            </Box>
          </Card>
        </Link>

        {/* bottom info */}
        <div
          style={{
            height: '85px',
            width: '430px',
            backgroundColor: '#F5F4F9',
          }}
        >
          <img src={require('../media/VooshLogo.png')} />
          <div style={{ fontSize: '12px', color: '#A1ADB9' }}>
            0222-13495/65/76 | support@voosh.com
          </div>
        </div>
      </div>
    </div>
  );
}
