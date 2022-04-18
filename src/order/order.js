import React from 'react';
import Headerback from '../header/headerback';
import Activeordercard from './activeordercard';
import Previousordercard from './previousordercard';

export default function Order() {
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
          Orders
        </div>
        <div
          style={{
            color: '#FF6A2D',
            fontSize: '10px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          ACTIVE ORDERS
        </div>
        <Activeordercard />
        <div
          style={{
            color: '#A9A9A9',
            fontSize: '10px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          PREVIOUS ORDERS
        </div>
        <Previousordercard />
        <Previousordercard />
        <Previousordercard />
        <Previousordercard />
      </div>
    </div>
  );
}
