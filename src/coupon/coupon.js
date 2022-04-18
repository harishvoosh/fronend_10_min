import React from 'react';
import Headerback from '../header/headerback';
import Couponcard from './coupancard';
import Input from './input';

export default function Coupon() {
  return (
    <>
      <Headerback />
      <Input />
      <div
        style={{
          margin: '16px',
          color: '#A9A9A9',
          fontSize: '10px',
          fontWeight: '700',
        }}
      >
        AVAILABLE COUPONS
      </div>
      <div>
        <Couponcard />
        <Couponcard />
        <Couponcard />
        <Couponcard />
        <Couponcard />
        <Couponcard />
      </div>
    </>
  );
}
