import React,{useEffect, useState} from 'react';
import {Container} from 'react-bootstrap'
import NavbarMain from './Navbar.js';
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
function Login() {
  const navigate=useNavigate();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[customers,setCustomers] = useState({
        customerid:0,
        customername: "",
        customeremail: "",
        customerpassword: "",
        orders:[]
    })
    const handleLogin = () => {
        if(customers.customeremail == email && customers.customerpassword == password){
            navigate(`/loggedin/products/${customers.customerid}`)
        }
        else{
            alert("Invalid Credentials");
            window.location.reload();
        }
    }

    useEffect(() =>{
        fetch(`http://localhost:61593/api/Customers/login/${email}`)
        .then(res => res.json())
        .then(res => {
            setCustomers(res[0])
            console.log(res)
        })
        .catch(error => console.log(error))
    },[email])
    return(
      <div>
        <NavbarMain />
      <div style={{background:'#24a0ed'}}>
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(event) =>{
              const value = event.target.value;
            setEmail(value)}}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"  onChange={(event) =>{
              const value = event.target.value;
            setPassword(value)}}/>
              <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' size='lg' disabled={!email||!password} onClick={handleLogin}>
                Login 
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
export default Login;