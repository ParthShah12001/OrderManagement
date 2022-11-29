import landingback from "./landingback.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './Navbar.js';
import React,{useEffect, useState} from 'react';
import { Outlet, Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
export default function Landing() {
  const navigate=useNavigate();
  const handleLogin = () =>{
    navigate(`/login`)
  }

  const handleRegister = () =>{
    navigate(`/register`)
  }
  return (
    <div>
      <NavbarMain />
      
      <div
        style={{
          backgroundImage: `url(${landingback}`,
          backgroundSize: "cover",
          height: "100vh"
        }}
      >
        <br></br>
      <br></br>
      <br></br>
      <br></br>
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '600px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Please Login or Register to start shopping</h2>

        <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' size='lg' onClick={handleLogin}>
          Login 
        </MDBBtn>
        <br></br>
        <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' size='lg' onClick={handleRegister}>
          Register 
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
      </div>
      
    </div>
  );
}
