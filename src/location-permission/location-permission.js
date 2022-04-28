import React from 'react';
import './location-permission.css';
import rightimage from './media/right-arrow.svg';
import payment from './media/paymnt-processing.png';
export default function Locationpermission() {
  return (
    <div>
      <title>Location Permission</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="location-permission.css" />
      <div className="main">
        <content>
          <div className="pymnt_procsng-main">
            <div className="pymnt_procsng-inner">
              <div className="pymnt_procsng-imagesec">
                <img src={payment} />
              </div>
              <div className="pymnt_procsng-descrp">
                <h2>Payment Processing</h2>
                <p>Please don't close this app while we process your payment</p>
              </div>
            </div>
          </div>
          <div className="process-popup">
            <div className="popup-card">
              <div className="card-head">
                <h3>Location Permission is Off</h3>
                <p>
                  Turn on location to access <br />
                  meals near you
                </p>
                <div className="enable-main">
                  <button className="btn enbl-btn">Enable</button>
                </div>
              </div>
              <div className="card-bg">
                <div className="manual-adres">
                  <p>Enter address Manually</p>
                  <span className="right-arow">
                    <img src={rightimage} />
                  </span>
                </div>
              </div>
            </div>
            <div className="overlay" />
          </div>
        </content>
      </div>
    </div>
  );
}
