import React from 'react';
import './enter-address-details.css';
import image from './media/6131.svg';
export default function Enteraddressdetails() {
  return (
    <div>
      <title>Enter Address Details</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="enter-address-details.css" />
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
            <h2>Enter Address Details</h2>
          </div>
        </header>
        <content>
          <div className="orng_bg-box">
            <div className="bx_left-sec">
              <img src="media/6131.svg" />
              <div className="bx_left-details">
                <h6>24th Main Road</h6>
                <p>424, 24th Main Rd, ITI L...</p>
              </div>
            </div>
            <div>
              <button className="chng-btn">Change</button>
            </div>
          </div>
          <div className="input-main">
            <div className="inpt-sngl">
              <label>
                <input type="text" id="phone" name="phone" />
                <span>HOUSE NO. &amp; FLOOR</span>
              </label>
            </div>
            <div className="inpt-sngl">
              <label>
                <input type="text" id="phone" name="phone" />
                <span>Building &amp; Block No.*</span>
              </label>
            </div>
            <div className="inpt-sngl">
              <label>
                <input type="text" id="phone" name="phone" />
                <span>Landmark &amp; Area Name (Optional)</span>
              </label>
            </div>
          </div>
          <div className="gt-strtd">
            <div className="gt-hdng">
              <h3>Get started</h3>
            </div>
            <div className="gtstrtd-rdobtn">
              <ul>
                <li>
                  <div className="vcl-nam">
                    <label>
                      <input type="radio" name="prprtyrelation" />
                      <span>Home</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="vcl-nam">
                    <label>
                      <input type="radio" name="prprtyrelation" />
                      <span>Work</span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="vcl-nam">
                    <label>
                      <input type="radio" name="prprtyrelation" />
                      <span>Others</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="verify-btn">
            <button className="btn vrify-btn">Save</button>
          </div>
        </content>
      </div>
    </div>
  );
}
