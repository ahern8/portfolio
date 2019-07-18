import React, { Component } from 'react';

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import "./About.css";


class About extends Component {

  render() {
    return(
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-top gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol
                md="12"
                className="white-text text-center text-md-center mt-xl-5 mb-5"
              >
                <MDBAnimation type="slideInDown" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    About Me
                  </h1>
                  <hr className="hr-light" />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5"
              >
                <MDBAnimation type="fadeInRight" delay=".3s">

                  <MDBCard style={{ width: "33.5rem" }} className="about-card">
                    <MDBCardBody>
                      <MDBCardTitle>This is my about page!</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    )
  }
}

export default About;
