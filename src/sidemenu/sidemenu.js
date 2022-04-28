import { margin } from '@mui/system';
import { Link } from 'react-router-dom';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BusinessIcon from '@mui/icons-material/Business';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidemenu() {
  return (
    <div
      style={{
        width: '310px',
      }}
    >
      <div style={{ backgroundColor: '#FFE5DA' }}>
        <Link to="profile" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
            }}
          >
            <div
              style={{
                borderColor: '#FF9313',
                borderWidth: '1px',
                backgroundColor: '#FF9313',
                height: '61px',
                width: '64px',
                borderRadius: 64 / 2,
              }}
            ></div>
            <div>
              <div
                style={{
                  color: '#333B43',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                Brenden Rogers
              </div>
              <div
                style={{
                  color: '#9A98AE',
                  fontWeight: 500,
                  fontSize: '12px',
                }}
              >
                Monthly plan active
              </div>
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 }}
              style={{ color: '#FF6A2D' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Link>
      </div>
      <div style={{ margin: '16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '16px',
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
            <AttachMoneyIcon />
          </IconButton>
          <div
            style={{
              color: '#333B43',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            Voosh Coins
          </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            style={{ color: '#898D91' }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
        <Link to="order" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '16px',
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
              <BookmarkBorderIcon />
            </IconButton>
            <div
              style={{
                color: '#333B43',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Orders
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 }}
              style={{ color: '#898D91' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Link>
        <Link to="address" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '16px',
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
              <BusinessIcon />
            </IconButton>
            <div
              style={{
                color: '#333B43',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Addresses
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 }}
              style={{ color: '#898D91' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Link>
        <Link to="faq" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '16px',
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
              <LiveHelpIcon />
            </IconButton>
            <div
              style={{
                color: '#333B43',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              FAQs
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 }}
              style={{ color: '#898D91' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Link>
        <Link to="feedback" style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '16px',
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
              <FeedbackIcon />
            </IconButton>
            <div
              style={{
                color: '#333B43',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Feedback
            </div>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0.5 }}
              style={{ color: '#898D91' }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </Link>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '16px',
            marginTop: '100px',
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
            <LogoutIcon />
          </IconButton>
          <div
            style={{
              color: '#333B43',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            Log out
          </div>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            style={{ color: '#898D91' }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          height: '85px',
          width: '309px',
          backgroundColor: '#F5F4F9',
          paddingLeft: '10px',
        }}
      >
        <img src={require('../media/VooshLogo.png')} />
        <div style={{ fontSize: '12px', color: '#A1ADB9' }}>
          0222-13495/65/76 | support@voosh.com
        </div>
      </div>
    </div>
  );
}
