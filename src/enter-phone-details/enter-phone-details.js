import React from 'react';
import './enter-phone-details.css';
export default function Enterphonedetails() {
  return (
    <div>
      <title>Enter Phone Details</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="enter-phone-details.css" />
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
            <h1>
              Your favourite food in <br />
              10 mins
            </h1>
            <p className>Enter your phone number</p>
            <div className="input-main">
              <div className="selct-drpdwn">
                <select name="countrycode" id="country-code">
                  <option value={+91}>+91</option>
                  <option value={+93}>+93</option>
                  <option value={+61}>+61</option>
                  <option value={+52}>+52</option>
                </select>
              </div>
              <div className="inpt-sngl">
                <label>
                  <input type="text" id="phone" name="phone" />
                  <span>Phone Number</span>
                </label>
              </div>
            </div>
          </div>
          <div className="verify-btn">
            <button className="btn vrify-btn">Verify</button>
          </div>
        </content>
      </div>
    </div>
  );
}
