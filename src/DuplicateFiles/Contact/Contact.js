import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBIcon, MDBCardImage, MDBCardTitle, MDBCardText, } from "mdbreact";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import "./Contact.css";


class Contact extends Component {

  state = {
  flipped: false
}

handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

  render() {
    return(
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
          <MDBCard style={{ width: "22rem" }}>
<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
<MDBCardBody>
  <MDBCardTitle>Card title</MDBCardTitle>
  <MDBCardText>
    Some quick example text to build on the card title and make
    up the bulk of the card&apos;s content.
  </MDBCardText>
  <MDBBtn href="#">MDBBtn</MDBBtn>
</MDBCardBody>
</MDBCard>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    )
  }
}

export default Contact;
