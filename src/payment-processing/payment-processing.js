import React from 'react';
import './payment-processing.css';
import loadimage from './media/paymnt-processing.png';
import failimage from './media/error-icon.png';
export default function Paymentprocessing() {
  return (
    <div>
      <title>Payment Processing</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="payment-processing.css" />
      <div className="main">
        <content>
          <div className="pymnt_procsng-main">
            <div className="pymnt_procsng-inner">
              <div className="pymnt_procsng-imagesec">
                <img src={loadimage} />
              </div>
              <div className="pymnt_procsng-descrp">
                <h2>Payment Processing</h2>
                <p>Please don't close this app while we process your payment</p>
              </div>
            </div>
          </div>
          <div className="process-popup">
            <div className="payment-failed">
              <span className="error-icon">
                <img src={failimage} />
              </span>
              <h3>Payment failed</h3>
              <p>Please don't close this app while we process your payment</p>
              <div className="verify-btn">
                <button className="btn vrify-btn gry-bg d-none">Retry</button>
                <button className="btn vrify-btn">Retry</button>
              </div>
              <div className="pymntmod-main">
                <button className="btn pymntmod-btn">
                  Pick another mode of payment
                </button>
              </div>
            </div>
            <div className="overlay" />
          </div>
        </content>
      </div>
    </div>
  );
}
