import {
  Navbar, Nav,
  Container, NavDropdown,
}
  from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";


const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#339AF0" }} variant="dark">
      <Container>
        <Navbar.Toggle className='justify-content-end' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>
                Ana səhifə
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>
                Haqqımızda
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
              <Nav.Link>
                Məhsullar
                <span className="position-absolute top-1 start-10 translate-middle p-1 bg-light border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/blog">
              <Nav.Link> ̰
                Blog
                
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>
                Əlaqə 
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="M" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/orders" as={Link} to="/user/orders">Profil</NavDropdown.Item>
              <NavDropdown.Item eventKey="/user/profile" as={Link} to="/user/">Tarixçə</NavDropdown.Item>
              <NavDropdown.Item >Çıxış</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
