import {
  Navbar, Nav,
  Container, NavDropdown,
}
  from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";

import '../style/homePage.css'


const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
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
              <Nav.Link>
                Blog
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link>
                Əlaqə
              </Nav.Link>
            </LinkContainer>

            <div class="dropdown">
              <button type="button" class="btn text-light" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <i class="bi bi-person-circle"></i>

              </button>
              <ul class="dropdown-menu dropdown-menu-start dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">
                  <i class="bi bi-person-circle"></i>
                </a></li>
                <li><a class="dropdown-item" href="/user/orders">Profil</a></li>
                <li><a class="dropdown-item" href="/user/profile">Tarixçə</a></li>
                <li><a class="dropdown-item" href="#">Çıxış</a></li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
