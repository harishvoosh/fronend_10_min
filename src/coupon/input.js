import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const blue = {
  100: '#FF6A2D',
  200: '#FF6A2D',
  400: '#FF6A2D',
  600: '#FF6A2D',
};

const grey = {
  50: '#FFF',
  100: '#FFF',
  200: '#FFF',
  300: '#FFF',
  400: '#FFF',
  500: '#FFF',
  600: '#FFF',
  700: '#FFF',
  800: '#FFF',
  900: '#FFF',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 380px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 10px 10px;
  

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

export default function Input() {
  return (
    <div style={{ marginLeft: '16px' }}>
      <CustomInput aria-label="Demo input" placeholder="Type something..." />
    </div>
  );
}
