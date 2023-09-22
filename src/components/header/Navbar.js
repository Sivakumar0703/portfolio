import React from 'react';
import './Navbar.css';
import {Link} from "react-scroll";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        
            <Navbar expand="lg" className="bg-body-tertiary header"  bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <div className='header-left-section'>
                            <h1>
                                <span style={{ color: 'green' }}>M</span>
                                <span style={{ color: 'red' }}>E</span>
                                <span style={{ color: '#87CEEB' }}>R</span>
                                <span style={{ color: 'yellowgreen' }}>N </span>
                                Stack Developer
                            </h1>
                        </div>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto nav-menu">

                            <Nav.Link href="#home">
                                <Link to="about" duration={500} smooth={true}> ABOUT </Link>
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <Link to="skill" duration={500} smooth={true}> SKILLS </Link>
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <Link to="project" duration={500} smooth={true}> PROJECT </Link>
                            </Nav.Link>

                            <Nav.Link href="#link">
                                <Link to="contact" duration={500} smooth={true}> CONTACT </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       
    )
}

export default NavigationBar