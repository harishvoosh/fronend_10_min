import React from 'react';
import Headerback from '../header/headerback';
import Input from './input';
import Upload from './upload';
import Button from '@mui/material/Button';
export default function Feedback() {
  return (
    <div>
      <Headerback />
      <Input />
      <Upload />
      <div>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}
