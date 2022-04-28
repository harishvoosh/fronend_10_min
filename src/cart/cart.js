import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
export default function Cart() {
  return (
    <div>
      <div className="main">
        <content>
          <div className="pymnt_procsng-main">
            <div className="pymnt_procsng-inner">
              <div className="pymnt_procsng-imagesec">
                <img src="media/paymnt-processing.png" />
              </div>
              <div className="pymnt_procsng-descrp">
                <h2>Payment Processing</h2>
                <p>Please don't close this app while we process your payment</p>
              </div>
            </div>
          </div>
          <div className="process-popup">
            <div className="popup-card">
              <div className="yelow-bgcard">
                <div className="flash-img">
                  <img src="media/flash.svg" />
                </div>
                <p>No delivery, packaging or any hidden charges</p>
              </div>
              <div className="grey-bgcard">
                <div className="bestdels-main brdr-btm">
                  <div className="ttl-hdng">
                    <p>best served with</p>
                  </div>
                  <div className="srvd-main">
                    <ul>
                      <li>
                        <div className="bstdls-crdbx">
                          <div className="item-prcdtls">
                            <span className="brand-icon">
                              <img src="media/brand-mark.svg" />
                            </span>
                            <h3>Masala papad</h3>
                            <div className="prc-dtls">
                              <span className="cutprc-sho">₹ 200</span>{' '}
                              <span className="mnprc-sho">₹ 160</span>
                            </div>
                          </div>
                          <div className="add-main">
                            <button className="btn add-btn">
                              <span>+</span>add
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="bstdls-crdbx">
                          <div className="item-prcdtls">
                            <span className="brand-icon">
                              <img src="media/brand-mark.svg" />
                            </span>
                            <h3>Masala papad</h3>
                            <div className="prc-dtls">
                              <span className="cutprc-sho">₹ 200</span>{' '}
                              <span className="mnprc-sho">₹ 160</span>
                            </div>
                          </div>
                          <div className="add-main">
                            <button className="btn add-btn">
                              <span>+</span>add
                            </button>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="bstdls-crdbx">
                          <div className="item-prcdtls">
                            <span className="brand-icon">
                              <img src="media/brand-mark.svg" />
                            </span>
                            <h3>Masala papad</h3>
                            <div className="prc-dtls">
                              <span className="cutprc-sho">₹ 200</span>{' '}
                              <span className="mnprc-sho">₹ 160</span>
                            </div>
                          </div>
                          <div className="add-main">
                            <button className="btn add-btn">
                              <span>+</span>add
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="slctditm-section brdr-btm">
                  <div className="ttl-hdng">
                    <p>Selected items</p>
                  </div>
                  <div className="slctd-main_items">
                    <ul>
                      <li>
                        <div className="itemlst-card">
                          <div className="menu-titl">
                            <h3>Ghee Masala Dosa(Serves 1)</h3>
                          </div>
                          <div className="rght-prt">
                            <div className="admor-quntity">
                              <div className="subtrct-btn">-</div>
                              <div className="input-bx">
                                <input
                                  type="number"
                                  defaultValue={1}
                                  minLength={1}
                                  maxLength={3}
                                />
                              </div>
                              <div className="admor-btn">+</div>
                            </div>
                            <div className="prc-dtls">
                              <div>
                                <span className="mnprc-sho">₹ 160</span>
                              </div>
                              <div>
                                <span className="cutprc-sho">₹ 200</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="itemlst-card">
                          <div className="menu-titl">
                            <h3>2 Idli and 1 Ghee Masala Dosa(Serves 1)</h3>
                          </div>
                          <div className="rght-prt">
                            <div className="admor-quntity">
                              <div className="subtrct-btn">-</div>
                              <div className="input-bx">
                                <input
                                  type="number"
                                  defaultValue={1}
                                  minLength={1}
                                  maxLength={3}
                                />
                              </div>
                              <div className="admor-btn">+</div>
                            </div>
                            <div className="prc-dtls">
                              <div>
                                <span className="mnprc-sho">₹ 160</span>
                              </div>
                              <div>
                                <span className="cutprc-sho">₹ 200</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="itemlst-card">
                          <div className="menu-titl">
                            <h3>Ghee Masala Dosa(Serves 1)</h3>
                          </div>
                          <div className="rght-prt">
                            <div className="admor-quntity">
                              <div className="subtrct-btn">-</div>
                              <div className="input-bx">
                                <input
                                  type="number"
                                  defaultValue={1}
                                  minLength={1}
                                  maxLength={3}
                                />
                              </div>
                              <div className="admor-btn">+</div>
                            </div>
                            <div className="prc-dtls">
                              <div>
                                <span className="mnprc-sho">₹ 160</span>
                              </div>
                              <div>
                                <span className="cutprc-sho">₹ 200</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="itemlst-card">
                          <div className="menu-titl">
                            <h3>Ghee Masala Dosa(Serves 1)</h3>
                          </div>
                          <div className="rght-prt">
                            <div className="admor-quntity">
                              <div className="subtrct-btn">-</div>
                              <div className="input-bx">
                                <input
                                  type="number"
                                  defaultValue={1}
                                  minLength={1}
                                  maxLength={3}
                                />
                              </div>
                              <div className="admor-btn">+</div>
                            </div>
                            <div className="prc-dtls">
                              <div>
                                <span className="mnprc-sho">₹ 160</span>
                              </div>
                              <div>
                                <span className="cutprc-sho">₹ 200</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="offer-section brdr-btm">
                  <div className="offer-descrp">
                    <h3>
                      <span>
                        <img src="media/chunks.svg" />
                      </span>
                      <span>Avail Offers</span>
                    </h3>
                    <span className="arow-icon">
                      <img src="media/right-arrow.svg" />
                    </span>
                  </div>
                </div>
                <div className="payblamnt-main">
                  <div className="payble_amnt">
                    <div className="payble-dtls">
                      <h3>Amount Payable</h3>
                    </div>
                    <div className="prc-dtls">
                      <span className="cutprc-sho">₹ 200</span>
                      <span className="mnprc-sho">₹ 160</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ftrbtn-main">
                <div className="add-main">
                  <Link
                    to="addpaymentmethod"
                    style={{ textDecoration: 'none' }}
                  >
                    <button className="btn add-btn">
                      Sign up/Sign in to complete your order
                    </button>
                  </Link>
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
