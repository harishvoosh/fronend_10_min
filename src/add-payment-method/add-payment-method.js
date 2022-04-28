import React from 'react';
import './add-payment-method.css';
import image from './media/grey-bg.svg';
import { Link } from 'react-router-dom';
import rightarrow from './media/right-arrow.svg';
export default function Addpaymentmethod() {
  return (
    <div>
      <title>ADD PAYMENT METHOD</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="add-payment-method.css" />
      <div className="main">
        <header className="wthout-bxshdw">
          <div className="top-head">
            <div className="back-icon">
              <svg
                width={24}
                height={26}
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.25 12.9922H3.75"
                  stroke="#FF6A2D"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 5.6875L3.75 12.9969L10.5 20.3063"
                  stroke="#FF6A2D"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* <h2>Enter Address Details</h2> */}
          </div>
        </header>
        <content>
          <div className="pymntmthod-main">
            <div className="pymntmthod-hdng">
              <h2>Add a method of payment</h2>
            </div>
            <div className="paymntmthd-innertp">
              <Link to="addnewcard" style={{ textDecoration: 'none' }}>
                <div className="paymntmthd-dtls">
                  <div className="bg-crcl">
                    <img src={image} />
                  </div>
                  <div className="paymntmthd-innerlst">
                    <h3>Credit &amp; Debit Cards</h3>
                    <p>VISA/Master Card/Rupay/American Express</p>
                  </div>
                  <span className="rght-arow">
                    <img src={rightarrow} />
                  </span>
                </div>
              </Link>
              <Link to="addnewupi" style={{ textDecoration: 'none' }}>
                <div className="paymntmthd-dtls">
                  <div className="bg-crcl">
                    <img src={image} />
                  </div>
                  <div className="paymntmthd-innerlst">
                    <h3>UPI</h3>
                    <p>PhonePay/Paytm/Gpay/Bheem</p>
                  </div>
                  <span className="rght-arow">
                    <img src={rightarrow} />
                  </span>
                </div>
              </Link>
              <div className="paymntmthd-dtls">
                <div className="bg-crcl">
                  <img src={image} />
                </div>
                <div className="paymntmthd-innerlst">
                  <h3>Easy Pay</h3>
                  <p>VISA/Master Card/Rupay/American Express</p>
                </div>
                <span className="rght-arow">
                  <img src={rightarrow} />
                </span>
              </div>
            </div>
          </div>
        </content>
      </div>
    </div>
  );
}
