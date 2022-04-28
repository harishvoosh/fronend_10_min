import React from 'react';
import './add-new-upi.css';
export default function Addnewupi() {
  return (
    <div>
      <title>Add New UPI</title>

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
            <h2>Add New UPI</h2>
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
