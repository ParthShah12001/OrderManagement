import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  } from "mdb-react-ui-kit";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  function Login() {
    const [id, setId] = useState();
    const [password,setPassword] = useState();
    const [cust,setCust] =useState({
      customerid:0,
      username:"",
      pass:""
  });

  
    const navigate = useNavigate();
  
    
    const handleChangeId = (event) => {
      setId(event.target.value);
    };

    const handleChangePass = (event) => {
      setPassword(event.target.value);
    };

    const LoginPage = () => {
      if(cust.customerid==id && cust.pass == password)
      {
        console.log(cust.customerid);
        console.log(cust.pass);
        navigate(`/loggedin/${id}`);
      }
      else{
        console.log(cust.customerid);
      }
    };
  

    useEffect(() =>{
      fetch(`http://localhost:61593/api/CustomerLogins/${id}`)
      .then(res => res.json())
      .then(res => {
        setCust(res)
        console.log(res)
      })
      .catch(error => console.log(error))
    }, [id])
    
  
    return (
      /*<MDBContainer className="my-5">
        <MDBCard style={{ backgroundColor: "rgb(194 194 194)" }}>
          <MDBRow className="g-0">
            <MDBCol col="10" md="6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </MDBCol>
  
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">Employee Login</span>
                </div>
  
                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
  
                <MDBInput
                  onChange={handleChange}
                  wrapperClass="mb-4"
                  label="Employee Id"
                  id="formControlLg"
                  type="number"
                  size="lg"
                />
  
                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  onClick={LoginPage}
                >
                  Login
                </MDBBtn>
  
                <div className="d-flex flex-row justify-content-start">
                  <a href="/" className="small text-muted me-1">
                    <b>Back to home</b>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>*/
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="divider d-flex align-items-center my-4">
            <h1 className="text-center fw-bold mx-3 mb-0">Customer Login</h1>
          </div>

          <MDBInput wrapperClass='mb-4' onChange={handleChangeId} label='CustomerId' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' onChange={handleChangePass} label='Password' id='formControlLg' type='password' size="lg"/>


          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={LoginPage}>Login</MDBBtn>
            
          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}
  
  export default Login;
  