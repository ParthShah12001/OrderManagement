import { Outlet, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from './Cart'
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate=useNavigate();
  const{id} = useParams();
  const gotoCart = () =>{
    navigate(`/cart/${id}`)
  }

  const gotoMyOrders = () =>{
    navigate(`/myorders/${id}`)
  }

  const gotoProducts = () =>{
    navigate(`/loggedin/${id}`)
  }

  const gotoLogout = () =>{
    navigate('/login')
  }

  return ( 
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hexaware Leave Management System
          </Navbar.Brand>
          <Nav className="me-auto">
          <button onClick={gotoMyOrders}>MyOrders</button>
           <button onClick={gotoCart}>Cart</button>
           <button onClick={gotoProducts}>Products</button>
           <button onClick={gotoLogout}>Logout</button>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
