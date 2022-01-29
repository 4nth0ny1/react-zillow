import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#buy">Buy</Nav.Link>
                        <Nav.Link href="#rent">Rent</Nav.Link>
                        <Nav.Link href="#sell">Sell</Nav.Link>
                        <Nav.Link href="#homeLoans">Home Loans</Nav.Link>
                        <Nav.Link href="#agentFinder">Agent</Nav.Link>
                        <Navbar.Brand href="#home">Zillow</Navbar.Brand>
                        <Nav.Link href="#manageRentals">Manage Rentals</Nav.Link>
                        <Nav.Link href="#advertise">Advertise</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                        <Nav.Link href="#signIn">Sign In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;