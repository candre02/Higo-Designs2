// import files
// import React, { useState } from 'react'
import { Navbar, Nav, Container,  } from 'react-bootstrap'
import React from 'react'
import { BagIcon } from 'chakra-ui-ionicons';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    // set modal display state
    // const [showModal, setShowModal] = useState(false)
  
    return (
        <Navbar bg="dark" variant="dark" expand="lg" id="heading">
          <Container fluid id='tabs'>
            <Link to="/" id='HD1'>HigoDesigns</Link>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Link to="/about" id='about1'>About</Link>
                <Link to="/services" id='srv1'>Services</Link>
                <Link to="/shop" id='shop1'>Shop</Link>
                {/* <Link to='/apppayment'><BagIcon w={6} h={6} /></Link> */}
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 )
}

export default AppNavbar;