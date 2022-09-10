import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
//import Image from 'react-bootstrap/Image'
import logo from "../assets/logo.png";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar w-100">
      <Container>
        <Navbar.Brand className="" href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlink me-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              Features
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              Services
            </Nav.Link>
            <Nav.Link className="navlink me-4" href="#">
              How it work
            </Nav.Link>
          </Nav>
          <Button variant="" size="lg" className="loginbutton me-2">
            Log in
          </Button>
          <Button variant="" className="joinus shadow-lg" size="lg">
            Join Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
