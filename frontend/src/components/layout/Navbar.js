import React, { Fragment } from 'react';

import logo from "./../../assets/img/space-koala-logo-02.png";

import { Navbar, Container, Nav } from 'react-bootstrap';



const Header = () => {
   return (
    <Fragment>      
      <Navbar bg="light" expand="lg" className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient" style={{'height': '80.766px'}}>
        <Container className="container">
          <Navbar.Brand href="/"><img src={logo} style={{"width": "200px"}} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse" style={{ "padding": "10px 10px 10px 20px"}}>
            <Nav className="navbar-nav ms-auto" style={{"align-items": "center", "background": "rgba(41,140,255,0)"}}>
              <Nav.Link data-scroll href="/#introduce" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}>Story</Nav.Link>
              <Nav.Link data-scroll href="/#collection" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}>Utilities &amp; Benefits</Nav.Link>
              <Nav.Link data-scroll href="/#roadmap" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}>Roadmap</Nav.Link>
              <Nav.Link data-scroll href="/#founders" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}>Team</Nav.Link>
              <Nav.Link data-scroll href="/#faq" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}>FAQ</Nav.Link>
              <Nav.Link href="/mint" className="nav-item nav-link" style={{"padding": "0px", "color": "white", "margin-right": "20px"}}><button className="btn btn-primary mint_btn" type="button">Mint Now</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </Fragment>
  );
};

export default Header;
