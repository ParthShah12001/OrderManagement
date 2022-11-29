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
const Registration = () =>{
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[name,setName] = useState();
    const[confirm,setConfirm] = useState(false);
    const[inputs,setInputs] = useState([]);
    const navigate=useNavigate();

    useEffect(() =>{
      if(confirm){
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(inputs)
          };
      
          fetch('http://localhost:61593/api/Customers/',requestOptions)
          .then(response => response.json)
          .then(response =>{
              alert("Registration Successful");
          })
          .catch(error => console.log(error));
          navigate(`/login`)
      }
    },[inputs])
    
    const handleRegister = () =>{
        setInputs({...inputs,"customername":name,"customeremail":email,"customerpassword":password})
        setConfirm(true);
        /*const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(inputs)
        };
    
        fetch('http://localhost:61981/api/Customers/',requestOptions)
        .then(response => response.json)
        .then(response =>{
            alert("Registration Successful");
        })
        .catch(error => console.log(error));
        navigate(`/login`)*/
    }
    return(
        <div>
        <NavbarMain />
      <div style={{background:'#24a0ed'}}>
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter your details</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLg' type='text' size="lg" onChange={(event) =>{
              const value = event.target.value;
            setName(value)}}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(event) =>{
              const value = event.target.value;
            setEmail(value)}}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"  onChange={(event) =>{
              const value = event.target.value;
            setPassword(value)}}/>
              <MDBBtn outline className='mx-2 px-5 btn btn-primary' color='white' size='lg' disabled={!email||!password||!name} onClick={handleRegister}>
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

export default Registration;