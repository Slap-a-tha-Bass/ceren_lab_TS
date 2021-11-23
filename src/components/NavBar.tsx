import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo1, Logo2, LogoButton, NavButton } from '../styled-components';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/">
                <LogoButton>
                    <Logo1>C</Logo1>
                    <Logo2>YF</Logo2>
                </LogoButton>
            </Navbar.Brand>
            <Navbar.Toggle className="border-dark mx-5" aria-controls="basic-navbar-nav">
                <div className="margin-neg toggle-button d-flex align-items-center justify-content-center text-center"><i className="bi bi-list h1 mt-2"></i></div>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="bg-dark">
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/mission">who we are</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/research">our research</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/people">people and values</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/news">news</Link>
                    <Link
                        className="nav-button border-dark nav-spacing"
                        to="/resources">resources</Link>
                </Nav>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <Link className="join-button d-flex align-items-center" to="/contact">join us</Link>
                </div>
                <NavButton>Yo</NavButton>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;

