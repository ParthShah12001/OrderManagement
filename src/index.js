import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home'
import Login from './Components/Login'
import Products from './Components/Products';
import 'bootstrap/dist/css/bootstrap.css'
import Cart from './Components/Cart';
import Myorders from './Components/Myorders'

const App1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="loggedin/:id" element={<Products />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="myorders/:id" element={<Myorders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App1;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App1 />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
