import React from 'react';
import Headerback from '../header/headerback';
import Menu from './menu';
import Card from '../card/card';
export default function Fullmenu() {
  return (
    <>
      <Headerback />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </div>

      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}
