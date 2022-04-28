// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Faq from './faq/faq';
import Feedback from './feedback/feedback';
import Dashboard from './dashboard/dashboard';
import Fullmenu from './fullmenu/fullmenu';
import Singlemenu from './fullmenu/singlemenu';
import Coupon from './coupon/coupon';
import Error from './error/error';
import Sidemenu from './sidemenu/sidemenu';
import Order from './order/order';
import Address from './address/address';
import Profile from './profile/profile';
// import Api from './component/api';

import Addnewcard from './add-new-card/add-new-card';
import Addnewupi from './add-new-upi/add-new-upi';
import Addpaymentmethod from './add-payment-method/add-payment-method';
import Enteraddressdetails from './enter-address-details/enter-address-details';
import Enterphonedetails from './enter-phone-details/enter-phone-details';
import Location from './location/location';
import Otp from './otp/otp';
import Paymentcompleat from './payment-compleat/payment-compleat';
import Paymentprocessing from './payment-processing/payment-processing';
import Paynow from './pay-now/pay-now';
import Locationpermission from './location-permission/location-permission';
import Cart from './cart/cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="fullmenu" element={<Fullmenu />} />
        <Route path="fullmenu/singlemenu" element={<Singlemenu />} />
        <Route path="cart/coupon" element={<Coupon />} />
        <Route path="error" element={<Error />} />
        <Route path="sidemenu" element={<Sidemenu />} />
        <Route path="sidemenu/profile" element={<Profile />} />
        <Route path="sidemenu/faq" element={<Faq />} />
        <Route path="sidemenu/feedback" element={<Feedback />} />
        <Route path="sidemenu/order" element={<Order />} />
        <Route path="sidemenu/address" element={<Address />} />
        <Route path="cart" element={<Cart />} />

        <Route path="cart/addpaymentmethod/addnewupi" element={<Addnewupi />} />

        <Route
          path="cart/addpaymentmethod/addnewcard"
          element={<Addnewcard />}
        />

        <Route path="cart/addpaymentmethod" element={<Addpaymentmethod />} />

        <Route
          path="sidemenu/address/enteraddressdetails"
          element={<Enteraddressdetails />}
        />

        <Route component={<Error />} />
      </Routes>
      {/* <Fullmenu /> */}
      {/* <Dashboard /> */}
      {/* <Singlemenu /> */}
      {/* <Coupon /> */}
      {/* <Error /> */}
      {/* <Sidemenu /> */}
      {/* <Profile /> */}
      {/* <Faq /> */}
      {/* <Feedback /> */}
      {/* <Order /> */}
      {/* <Address /> */}
      {/* <Api /> */}
      {/* <Addnewcard /> */}
      {/* <Addnewupi /> */}
      {/* <Addpaymentmethod /> */}
      {/* <Enteraddressdetails /> */}
      {/* <Enterphonedetails /> */}
      {/* <Location /> */}
      {/* <Locationpermission /> */}
      {/* otp pending */} {/* <Otp /> */}
      {/* <Paynow /> */}
      {/* <Paymentcompleat /> */}
      {/* <Paymentprocessing /> */}
    </div>
  );
}

export default App;
