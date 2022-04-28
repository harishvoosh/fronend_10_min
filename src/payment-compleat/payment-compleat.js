import React from 'react';
import './payment-compleat.css';
import complete from './media/paymnt-compleat.png';
export default function Paymentcompleat() {
  return (
    <div>
      <title>Payment Complete</title>
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        name="viewport"
      />
      <link rel="stylesheet" href="payment-compleat.css" />
      <div className="main">
        <content>
          <div className="pymnt_procsng-main">
            <div className="pymnt_procsng-inner">
              <div className="pymnt_procsng-imagesec">
                <img src={complete} />
              </div>
              <div className="pymnt_procsng-descrp">
                <h2>Payment was complete</h2>
                <p>Please don't close this app while we process your payment</p>
              </div>
            </div>
          </div>
        </content>
      </div>
    </div>
  );
}
