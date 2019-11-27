import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar className="bg-danger" color="dark" expand="md" fixed="top" color-on-scroll="500">
      <div className="container">
        <NavbarBrand href="/">Gis-street</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="now-ui-icons location_map-big"></i>
              <p>Peta</p>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="now-ui-icons files_single-copy-04"></i>
              <p>Data Jalan</p>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="now-ui-icons design-2_ruler-pencil"></i>
              <p>Data Jembatan</p>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="now-ui-icons files_single-copy-04"></i>
              <p>PJU</p>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="now-ui-icons ui-2_settings-90"></i>
              <p>Data Perbaikan</p>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="fa fa-facebook fa-2x"></i>
            </a>
          </NavItem>
          <NavItem>
            <a href="#0" className="nav-link">
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigation;
