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
export default function Previousordercard() {
  return (
    <Card sx={{ maxWidth: 430, margin: '16px' }}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '5px',
          }}
        >
          <Typography
            style={{ color: '#808080', fontSize: '10px', fontWeight: '700' }}
          >
            ORDER #12453
          </Typography>

          <Typography
            style={{ color: '#000', fontSize: '10px', fontWeight: '500' }}
          >
            Delivered
          </Typography>
        </div>
        <div style={{ display: 'flex', margin: '5px' }}>
          <Typography style={{ color: '#808080', fontSize: '10px' }}>
            ₹ 200
          </Typography>
          <Typography
            style={{ color: '', fontSize: '10px', fontWeight: '700' }}
          >
            ₹ 160
          </Typography>
        </div>
        <div
          style={{
            borderTop: '2px solid #000 ',
            opacity: '10%',
            color: '#000',
            margin: '7px',
          }}
        ></div>
        <Typography
          style={{ opacity: '50%', fontSize: '10px', fontWeight: '500' }}
        >
          Mutton Galauti Kebab (4pcs) x 1, Murgh Tikka Masala x 1, Whole Wheat
          Rumali Roti x 2
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          size="small"
          style={{
            color: '#808080',
            fontWeight: 700,
            width: '148px',
            height: '40px',
          }}
        >
          BILL SUMMARY
        </Button>
        <Button
          size="small"
          style={{
            // color: '#fff',
            color: '#FF661E',
            fontWeight: 700,
            width: '148px',
            height: '40px',
          }}
        >
          GIVE FEEDBACK
        </Button>
      </CardActions>
    </Card>
  );
}
