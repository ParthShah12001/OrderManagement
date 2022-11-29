import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './logo.svg';
const NavbarMain = () =>{
    return (
        <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/>{''}
            Logo
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      )
}
export default NavbarMain;