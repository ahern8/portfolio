import React from 'react';
import { Link } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./Header.css";

const Header = () => (
  <MDBNav className="justify-content-center navbar">
    <MDBNavItem className="nav-item">
      <MDBNavLink className="nav-text" to="/">Intro</MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBNavLink className="nav-text" to="/Projects">Projects</MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBNavLink className="nav-text" to="/Contact">Contact</MDBNavLink>
    </MDBNavItem>
  </MDBNav>
)

export default Header;
