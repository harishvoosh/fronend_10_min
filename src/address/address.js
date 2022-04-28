import React from 'react';
import { Link } from 'react-router-dom';
import Headerback from '../header/headerback';
import Addresscard from './addresscard';
import Button from '@mui/material/Button';
import axios from 'axios';
import { API_BASE_URL } from '../constants/siteConstants';

export default function Address() {
  const addNewAddress = (city, state) => {
    const data = {
      input: {
        customer_id: 1,
        address_line_1: 'Test 2',
        address_line_2: 'Test 2',
        landmark: 'dummy landmark',
        locality: 'xyz',
        city: 'Random',
        state: 'Random',
        country: 'India',
        hometown: 'Random',
        pincode: 831012,
        annotation: 'Work',
        annotation_nickname: "Dad's place",
        address_latitude: 22.8048,
        address_longitude: 86.2028,
      },
    };

    axios
      .post(`${API_BASE_URL}/user/add-address`, data, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers':
            'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <>
      <Headerback />
      <div>
        <div
          style={{
            color: '#B3B3B3',
            fontSize: '14px',
            fontWeight: 500,
            margin: '16px',
          }}
        >
          Full menu
        </div>
        <div
          style={{
            color: '#000',
            fontSize: '28px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          Addresses
        </div>
        <div
          style={{
            color: '#FF6A2D',
            fontSize: '10px',
            fontWeight: 700,
            margin: '16px',
          }}
        >
          SAVED ADDRESSES
        </div>

        <Addresscard />
        <Addresscard />
        <Addresscard />
      </div>
      <Link to="enteraddressdetails" style={{ textDecoration: 'none' }}>
        <Button
          variant="outlined"
          onClick={() => addNewAddress()}
          style={{
            margin: '16px',
            backgroundColor: '#1CD14F',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            height: '40px',
          }}
        >
          + Add a new Address
        </Button>
      </Link>
    </>
  );
}
