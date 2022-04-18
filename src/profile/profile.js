import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Headerback from '../header/headerback';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Profile() {
  return (
    <>
      <Headerback />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={
            {
              // borderColor: '#FF9313',
              // borderWidth: '1px',
              // borderRadius: '118/2',
            }
          }
        >
          <img
            style={{
              height: 118,
              width: 118,
            }}
            src={require('../media/pancake 1.png')}
          />
        </div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '319px', marginLeft: '16px' },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField id="filled-basic" label="Name" variant="filled" />
          <TextField id="filled-basic" label="Number" variant="filled" />
          <TextField id="filled-basic" label="Email Address" variant="filled" />
        </Box>
        <Button variant="contained" style={{ backgroundColor: '#FF2F2A' }}>
          Update
        </Button>
      </div>
    </>
  );
}
