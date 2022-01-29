import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

    return(
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto nav-container">
                        <div className="left-nav">
                            <Nav.Link href="#buy">
                                <NavDropdown className="nav-dropdown" title="Buy" id="collasible-nav-dropdown">
                                    <div className="dropdown-section">
                                        {/* <NavDropdown.Item href="#buy">Buy</NavDropdown.Item> */}
                                        <NavDropdown.Item href="#action/3.1">Homes for sale</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Foreclosures</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">For sale by owner</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Open houses</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">New Construction</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Coming Soon</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Recent home sales</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">All homes</NavDropdown.Item>
                                    </div>
                                    <div className="dropdown-section">
                                        <NavDropdown.Item href="#action/3.1">Buy and sell with Zillow 360</NavDropdown.Item>
                                    </div>
                                    <div className="dropdown-section">
                                        <NavDropdown.Item href="#action/3.1">Buyer's Guide</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Foreclosure Center</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Real estate app</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Find a buyer's agent</NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </Nav.Link>

                            <Nav.Link href="#rent">Rent</Nav.Link>
                            <Nav.Link href="#sell">Sell</Nav.Link>
                            <Nav.Link href="#homeLoans">Home Loans</Nav.Link>
                            <Nav.Link href="#agentFinder">Agent</Nav.Link>
                        </div>
                        <div className="mid-nav">
                            <Navbar.Brand href="#home">
                                <img className="zillow-logo" src="./zillow.png" alt="zillow-logo" />
                            </Navbar.Brand>
                        </div>
                        <div className="right-nav">
                            <Nav.Link href="#manageRentals">Manage Rentals</Nav.Link>
                            <Nav.Link href="#advertise">Advertise</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                            <Nav.Link href="#signIn">Sign In</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};



export default Navigation;

