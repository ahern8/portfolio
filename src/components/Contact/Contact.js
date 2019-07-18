import React, { Component } from 'react';
import "./Contact.css";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon} from 'mdbreact';
import Image from './Default.JPG';


class Contact extends Component {
  render() {
    return(
      <div id="Contact">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="3"></MDBCol>
            <MDBCol md="6">
              <MDBAnimation type="slideInDown" delay=".3s">
                <h1 className="h1-responsive font-weight-bold mt-sm-5 contact-me">
                  Contact Me
                </h1>
                <hr className="hr-light" />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3"></MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol sm="3" md="3"></MDBCol>
            <MDBCol xlg="6" md="6" sm="12">
              <MDBAnimation type="rotateInUpRight" delay=".3s">
              <MDBCard className="contact-card">
                <MDBCardBody>
                  <MDBRow className="contact-row">
                    <MDBCol md="6" xlg="6"  className="first-col">
                      <h2>Alex Hernandez</h2>
                      <img
                        src={Image}
                        alt="avatar"
                        style={{height: '250px'}}
                        className="image"
                         />
                    </MDBCol>
                    <MDBCol md="6" xlg="6" className="contact-info">
                      <ul className="list-unstyled contact-list">
                        <li>
                          <MDBIcon icon="phone" size="2x" className="black-text mt-4 " />
                          <p>
                          (480) 277-9161
                          </p>
                        </li>
                        <li>
                          <MDBIcon icon="envelope" size="2x" className="black-text mt-4" />
                          <p>
                          Alex@TheWorkofAlex.com
                          </p>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol sm="3" md="3"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

    );
  }
}

export default Contact;
