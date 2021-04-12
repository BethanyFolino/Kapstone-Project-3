import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>App Name</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>

        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>
        <Link to="/">Sign Out</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
