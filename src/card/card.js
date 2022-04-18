import * as React from 'react';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import IncDecCounter from './IncDecCounter';
import './card.css';
export default function MediaControlCard() {
  return (
    <Card
      sx={{
        display: 'flex',
        margin: '10px',
        height: '157px',
        width: '400px',
        borderRadius: '8px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          {/* Veg Non-Veg logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <img style={{ height: 17 }} src={require('../media/veg.png')} />
            {/* <IconButton
              style={{ color: '#FF6A2D', height: '8px', width: '8px' }}
            >
              <StarIcon />
            </IconButton> */}
            <Typography
              component="div"
              fontWeight="700px"
              fontSize={'8.33px'}
              color="#ECB528"
              style={{
                backgroundColor: '#FFF09C',
                padding: 2,
                borderRadius: 3.33,
              }}
            >
              BEST SELLER
            </Typography>

            {/* healthy */}

            {/* <Typography
             component="div"
              fontWeight="700px"
              fontSize={'8.33px'}
              color="#5CC379"
              style={{
                backgroundColor: '',
                padding: 2,
                borderRadius: 3.33,
              }}
            >
              HEALTHY
            </Typography> */}
          </div>
          <Typography component="div" fontWeight="600px" fontSize={'12px'}>
            Ghee Masala Dosa(Serves 1)
          </Typography>
          <Typography
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              fontWeight="500px"
              fontSize={'12px'}
            >
              <strike> ₹200 </strike>
            </Typography>

            <Typography
              variant="price"
              fontWeight="700px"
              fontSize={'12px'}
              style={{ fontWeight: 'bold' }}
            >
              ₹160
            </Typography>
          </Typography>
          <Typography
            fontSize={'10px'}
            fontWeight="500px"
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            A light and crispy Ghee Masala Dosa is made by lightly drizzlin..
          </Typography>
        </CardContent>
      </Box>
      <div style={{ flexDirection: 'column', margin: '8px' }}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120 }}
          image={require('../media/dosa.png')}
          alt=""
        />
        <IncDecCounter />
      </div>
    </Card>
  );
}
