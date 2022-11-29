import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './Landing';
import Login from './Login';
import Registration from './Registration';
import Products from './Products';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
import OrderHistory from './OrderHistory';
import OrderDetails from './OrderDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App1 = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="loggedin/Products/:id" element={<Products />} />
          <Route path="loggedin/cart/:id" element={<Cart />} />
          <Route path="loggedin/myorders/:id" element={<OrderHistory />} />
          <Route path="loggedin/:productid/:id" element={<ProductDetails />} />
          <Route path="loggedin/orderid=:orderid/customerid=:id" element={<OrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
