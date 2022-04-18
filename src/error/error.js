import React from 'react';
import Header from '../header/header';

export default function Error() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderTopRightRadius: '30px',
          borderTopLeftRadius: '30px',
          marginTop: '10px',
        }}
      >
        <img
          style={{
            height: '142px',
            width: '142px',
          }}
          src={require('../media/Ellipse.png')}
        />
        <div style={{ fontSize: '16px', fontWeight: '700' }}> Apologies</div>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#7C819C' }}>
          We couldn’t load the menu
        </div>
      </div>
    </div>
  );
}
