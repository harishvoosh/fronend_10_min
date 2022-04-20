import React from 'react';

export default function Header1() {
  return (
    <div>
      {' '}
      <div
        style={{
          background: '#83ADFF',
          height: 120,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              color: '#fff',
              fontSize: '14px',
              paddingLeft: '16px',
              paddingTop: '10px',
            }}
          >
            We have your favourite items for
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: '28px',
              paddingLeft: '16px',
              fontWeight: 'bold',
            }}
          >
            Breakfast
          </div>
          <div
            style={{
              color: '#fff',
              fontSize: '14px',
              paddingLeft: '16px',
            }}
          >
            8 PM - 11 AM
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 8,
            justifyContent: 'space-between',
          }}
        >
          <img
            style={{
              backgroundColor: '#4A88C8',
              borderRadius: 90 / 2,
              // marginTop: -10,

              height: 70,
              width: 70,
            }}
            src={require('../media/pancake 1.png')}
          />
          <select
            id="dropdown"
            style={{
              backgroundColor: '#4A88C8',
              borderRadius: '100px',
              height: '32px',
              width: '77px',
              color: '#fff',
            }}
          >
            <option value="N/A"> Veg only</option>
            <option value="1">Non-Veg only</option>
          </select>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#4A88C8',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
          height: 80,
          // marginBottom: -60,
          fontSize: '12px',
        }}
      >
        Get your food fresh,hot and in 10 mins
      </div>
    </div>
  );
}
