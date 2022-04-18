import React from 'react';
import Headerback from '../header/headerback';
import Addresscard from './addresscard';
import Button from '@mui/material/Button';

export default function Address() {
  return (
    <div>
      <Headerback />
      <div>
        <div
          style={{
            color: '#B3B3B3',
            fontSize: '14px',
            fontWeight: 500,
            margin: '16px',
          }}
        >
          Full menu
        </div>
        <div
          style={{
            color: '#000',
            fontSize: '28px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          Addresses
        </div>
        <div
          style={{
            color: '#FF6A2D',
            fontSize: '10px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          SAVED ADDRESSES
        </div>

        <Addresscard />
        <Addresscard />
        <Addresscard />
      </div>
      <Button
        variant="outlined"
        style={{
          margin: '16px',
          backgroundColor: '#1CD14F',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 700,
          height: '40px',
          width: '400px',
        }}
      >
        + Add a new Address
      </Button>
    </div>
  );
}
