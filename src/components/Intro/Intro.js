import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Intro.css";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";




class Intro extends Component {

  render() {
    return (
      <div id="Intro">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="4">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Hi, I'm Alex Hernandez!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    I'm a Full Stack Software Developer.
                  </h6>
                </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Intro;
