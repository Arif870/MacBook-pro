import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../utilities/images/logo2.png";
import "./Menu.css";

export default function Menu() {
  const { user, userLogout } = useAuth();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="shadow-sm"
      >
        <Container>
          <Navbar.Brand className="w-25">
            <Link to="/">
              <img className="w-75" src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-4 text-center">
              <Nav.Link as={Link} to="/cart">
                <i className="fas fa-cart-plus"></i>
              </Nav.Link>

              {user.email && (
                <Nav.Link as={Link} to="">
                  {user.displayName}
                </Nav.Link>
              )}
              {user.email ? (
                <Nav.Link onClick={userLogout} as={Link} to="/signup">
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {!user.email && (
                <Nav.Link as={Link} to="/signup" className="signupBtn">
                  SignUp
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
