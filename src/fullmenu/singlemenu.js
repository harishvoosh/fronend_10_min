import Card from '../card/card';
import React from 'react';

import Headerback from '../header/headerback';

export default function Singlemenu() {
  return (
    <div style={{ backgroundColor: 'rgba(255, 107, 44, 0)' }}>
      <Headerback />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 16,
        }}
      >
        <div>
          <div style={{ color: '#B3B3B3', fontSize: '14px', fontWeight: 500 }}>
            Full menu
          </div>
          <div style={{ color: '#000', fontSize: '28px', fontWeight: 700 }}>
            Biryanis
          </div>
        </div>

        <img
          style={{
            height: 118,
            width: 118,
            marginTop: '-30px',
          }}
          src={require('../media/pancake 1.png')}
        />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
