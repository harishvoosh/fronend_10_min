import React from 'react';
import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <div
      style={{
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        margin: '16px',
      }}
    >
      <Link to="singlemenu">
        <img
          style={{
            position: 'relative',
            height: '64px',
            width: '64px',
            backgroundColor: '#C4C4C4',
            borderRadius: 90 / 2,
          }}
          src={require('../media/pancake 1.png')}
        />
      </Link>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '12px', fontWeight: '700' }}>Biryanis</div>
        <div style={{ color: '#C4C4C4', fontSize: '12px', fontWeight: '700' }}>
          (12)
        </div>
      </div>
    </div>
  );
}
