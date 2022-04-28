import React from 'react';
import './otp.css';
export default function Otp() {
  return (
    <div>
      <title>OTP</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="otp.css" />
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
            {/* <h2>Location Information</h2> */}
          </div>
        </header>

        <content>
          <div className="phndtl-hdng">
            <h1>Enter 6 Digit OTP</h1>
            <p className>OTP sent to 982*****465</p>
          </div>
          <div className="input-main input-main_otp">
            <input type="text" minLength={1} maxLength={1} />
            <input type="text" minLength={1} maxLength={1} />
            <input type="text" minLength={1} maxLength={1} />
            <input type="text" minLength={1} maxLength={1} />
            <input type="text" minLength={1} maxLength={1} />
            <input type="text" minLength={1} maxLength={1} />
          </div>
          <div className="notrcv-otp">
            <p className="error-msg">OTP is incorrect</p>
            <p>
              Did not recieve OTP? <span>Try again</span>
            </p>
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
