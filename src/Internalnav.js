import {  Nav, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import logo from './logo.svg';
const Internalnav = () =>{
    const{id} = useParams()
    return(
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/>{''}
            Logo
          </Navbar.Brand>
          <Nav>
            <Nav.Link href={`/loggedin/products/${id}`}>Products</Nav.Link>
            <Nav.Link href={`/loggedin/cart/${id}`}>Cart</Nav.Link>
            <Nav.Link href={`/loggedin/myorders/${id}`}>Orders</Nav.Link>
            <Nav.Link href={`/login`}>Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
}
export default Internalnav;