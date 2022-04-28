import React from 'react';
import './location.css';
export default function Location() {
  return (
    <div>
      <title>Location</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="location.css" />
      <div className="main">
        <header>
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
            <h2>Location Information</h2>
          </div>
        </header>
        <content>
          <div className="map-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.000340584378!2d72.84821451437604!3d19.019706658683234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced8b6b705a7%3A0x37542e748a42630f!2s607%2C%20Khareghat%20Rd%2C%20Central%20Railway%20Colony%2C%20Parsee%20Colony%2C%20Dadar%2C%20Mumbai%2C%20Maharashtra%20400014!5e0!3m2!1sen!2sin!4v1650276700935!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="final-location">
            <h4>Central Railway</h4>
            <p>
              607, Khareghat Rd, Central Railway Colony, Parsee Colony, Dadar,
              Mumbai, Maharashtra 400014, India
            </p>
            <div className="main-btn">
              <button className="btn proced-btn">Proceed</button>
            </div>
          </div>
        </content>
      </div>
    </div>
  );
}
