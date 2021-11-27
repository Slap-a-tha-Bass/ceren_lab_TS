import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  JoinButton,
  Logo1,
  Logo2,
  LogoButton,
  NavButton,
} from "../styled-components";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <LogoButton>
          <Logo1>C</Logo1>
          <Logo2>YF</Logo2>
        </LogoButton>
      </Navbar.Brand>
      <Navbar.Toggle
        className="border-dark mx-5"
        aria-controls="basic-navbar-nav"
      >
        <div className="margin-neg toggle-button d-flex align-items-center justify-content-center text-center">
          <i className="bi bi-list h1 mt-2"></i>
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="bg-dark">
          <NavButton to="/mission">who we are</NavButton>
          <NavButton to="/research">our research</NavButton>
          <NavButton to="/people">people and values</NavButton>
          <NavButton to="/news">news</NavButton>
          <NavButton to="/resources">resources</NavButton>
        </Nav>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <JoinButton to="/contact">join us</JoinButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
