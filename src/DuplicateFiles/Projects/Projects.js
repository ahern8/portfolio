import React from "react";
import { MDBCard, MDBIcon } from "mdbreact";
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
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import "./Projects.css";
import image from './react-basics.png';

const Projects = () => {
  return (
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
              Projects
            </h1>
            <hr className="hr-light" />
          </MDBAnimation>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="4" sm="12">
          <MDBAnimation type="rollIn" delay=".3s">
            <MDBCard style={{ width: "22rem" }} className="card-one">
              <MDBCardBody>
                <img src={image} className="card-img" />
                  <MDBCardTitle className="title">React Basics</MDBCardTitle>
                  <MDBCardText>
                   Simple form that allows you to add and delete a person's name and job title.
                 </MDBCardText>
                 <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                    <MDBIcon fab icon="github" className="left" /> <strong>Github</strong>
                  </MDBBtn>
                  <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                     <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
                   </MDBBtn>
               </MDBCardBody>
            </MDBCard>
        </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" sm="12">
          <MDBAnimation type="rollIn" delay=".3s">
            <MDBCard style={{ width: "22rem" }} className="card-one">
              <MDBCardBody>
                <img src={image} className="card-img" />
                  <MDBCardTitle className="title">React Basics</MDBCardTitle>
                  <MDBCardText>
                   Simple form that allows you to add and delete a person's name and job title.
                 </MDBCardText>
                 <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                    <MDBIcon fab icon="github" className="left" /> <strong>Github</strong>
                  </MDBBtn>
                  <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                     <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
                   </MDBBtn>
               </MDBCardBody>
            </MDBCard>
        </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" sm="12">
          <MDBAnimation type="rollIn" delay=".3s">
            <MDBCard style={{ width: "22rem" }} className="card-one">
              <MDBCardBody>
                <img src={image} className="card-img" />
                  <MDBCardTitle className="title">React Basics</MDBCardTitle>
                  <MDBCardText>
                   Simple form that allows you to add and delete a person's name and job title.
                 </MDBCardText>
                 <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                    <MDBIcon fab icon="github" className="left" /> <strong>Github</strong>
                  </MDBBtn>
                  <MDBBtn href=" " target="_blank" color="pink" rounded size="md">
                     <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
                   </MDBBtn>
               </MDBCardBody>
            </MDBCard>
        </MDBAnimation>
        </MDBCol>
      </MDBRow>
  

      </MDBContainer>
    </MDBMask>
  </MDBView>
);

}

export default Projects;
