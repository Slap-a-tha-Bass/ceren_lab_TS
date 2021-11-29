import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  JoinButton,
  Logo1,
  Logo2,
  LogoButton,
  NavButton,
  ToggleButton,
  ToggleDiv,
} from "../styled-components";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" collapseOnSelect>
      <Navbar.Brand href="/">
        <LogoButton>
          <Logo1>C</Logo1>
          <Logo2>YF</Logo2>
        </LogoButton>
      </Navbar.Brand>
      <ToggleDiv>
        <Navbar.Toggle>
          <ToggleButton>
            <i className="bi bi-list h1 mt-2"></i>
          </ToggleButton>
        </Navbar.Toggle>
      </ToggleDiv>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="bg-dark">
          <Nav.Item>
            <Nav.Link eventKey={1} as={Link} to="/mission">
              <NavButton>who we are</NavButton>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={2} as={Link} to="/research">
              <NavButton>our research</NavButton>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={3} as={Link} to="/people">
              <NavButton>people and values</NavButton>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey={4} as={Link} to="/news">
              <NavButton>news</NavButton>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey={5} as={Link} to="/resources">
              <NavButton>resources</NavButton>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <JoinButton to="/contact">join us</JoinButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
