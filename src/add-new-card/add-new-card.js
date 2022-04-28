import React from 'react';
import './add-new-card.css';

export default function Addnewcard() {
  return (
    <div>
      <title>Add New Card</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="add-new-card.css" />
      <div className="main">
        <header className>
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
            <h2>Add New Card</h2>
          </div>
        </header>
        <content>
          <div className="input-main">
            <div className="inpt-sngl">
              <label>
                <input type="text" name="Card_Number" />
                <span>Card Number</span>
              </label>
            </div>
            <div className="cvvsec-main">
              <div className="valid-input">
                <div className="inpt-sngl">
                  <label>
                    <input type="text" name="valid_date" />
                    <span>Valid Through (MM/YY)</span>
                  </label>
                </div>
              </div>
              <div className="cvv-input">
                <div className="inpt-sngl">
                  <label>
                    <input
                      type="Password"
                      name="cvv"
                      minLength={3}
                      maxLength={3}
                    />
                    <span>CVV</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="inpt-sngl">
              <label>
                <input type="text" name="name" />
                <span>Name On Card</span>
              </label>
            </div>
            <div className="inpt-sngl">
              <label>
                <input type="text" name="nick_name" />
                <span>Card Nick Name (For easy Identification)</span>
              </label>
            </div>
          </div>
          <div className="optional-sec">
            <p className="border-titl">Optional*</p>
            <div className="vcl-nam">
              <label>
                <input type="radio" name="prprtyrelation" />
                <span>
                  <em />
                  Securely save VPA for future use
                </span>
              </label>
            </div>
          </div>
          <div className="verify-btn">
            <button className="btn vrify-btn gry-bg">Verify</button>
            <button className="btn vrify-btn d-none">Verify</button>
          </div>
        </content>
      </div>
    </div>
  );
}
