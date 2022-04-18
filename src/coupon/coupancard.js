import * as React from 'react';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';

// import './card.css';
export default function Couponcard() {
  return (
    <Card
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        margin: '16px',
        height: '111px',
        width: '400px',
        borderRadius: '8px',
        backgroundColor: '#FFF6F2',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="price"
              fontWeight="700px"
              fontSize={'12px'}
              style={{
                fontWeight: 'bold',
                color: '#FF6A2D',
                height: '12px',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '8px',
              }}
            >
              JUPITERCARD100
            </Typography>
            <img
              style={{
                height: '39px',
                width: '39px',
              }}
              src={require('../media/Icon.png')}
            />
          </div>
          <div>
            <Typography
              variant="coupon"
              fontSize={'12px'}
              style={{
                fontWeight: '600px',
                color: '#000',
              }}
            >
              Get 15% off using Jupiter Debit Card
            </Typography>
          </div>
          <div>
            <Typography
              variant="coupon"
              fontSize={'10px'}
              style={{
                fontWeight: '600px',
                color: '#B3B3B3',
              }}
            >
              Use code JUPITERCARD100 & get 15% off upto 100 on order above 400
            </Typography>
          </div>
          {/* Veg Non-Veg logo */}
        </CardContent>
      </Box>
    </Card>
  );
}
