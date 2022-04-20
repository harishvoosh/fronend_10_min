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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="fullmenu" element={<Fullmenu />} />
        <Route path="fullmenu/singlemenu" element={<Singlemenu />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="error" element={<Error />} />
        <Route path="sidemenu" element={<Sidemenu />} />
        <Route path="sidemenu/profile" element={<Profile />} />
        <Route path="sidemenu/faq" element={<Faq />} />
        <Route path="sidemenu/feedback" element={<Feedback />} />
        <Route path="sidemenu/order" element={<Order />} />
        <Route path="sidemenu/address" element={<Address />} />
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
    </div>
  );
}

export default App;
