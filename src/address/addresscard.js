import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function Addresscard() {
  return (
    <Card sx={{ margin: '16px' }}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            // justifyContent: 'space-between',
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            style={{ color: '#FF6A2D' }}
          >
            <HomeIcon />
          </IconButton>
          <div>
            <Typography
              style={{ color: '#000', fontSize: '12px', fontWeight: '700' }}
            >
              Home
            </Typography>
            <Typography
              style={{ opacity: '50%', fontSize: '10px', fontWeight: '500' }}
            >
              Mutton Galauti Kebab (4pcs) x 1, Murgh Tikka Masala x 1, Whole
              Wheat Rumali Roti x 2
            </Typography>
            <Typography
              style={{
                fontSize: '10px',
                fontWeight: '500',
                color: '#B3B3B3',
                marginTop: '3px',
              }}
            >
              Phone number : 9769310777
            </Typography>
          </div>
        </div>
      </CardContent>
      <div
        style={{
          borderTop: '2px solid #000 ',
          opacity: '10%',
          color: '#000',
          margin: '7px',
        }}
      ></div>
      <CardActions style={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          size="small"
          style={{
            color: '#FF661E',
            fontWeight: 700,
            width: '50px',
            height: '30px',
          }}
        >
          EDIT
        </Button>
        <Button
          size="small"
          style={{
            // color: '#fff',
            color: '#FF661E',
            fontWeight: 700,
            width: '50px',
            height: '30px',
          }}
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
