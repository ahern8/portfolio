import React from "react";
import "./Projects.css";
import Image from './react-basics.png';
import WeatherImage from './weatherapp.png';
import RecipeImage from './recipeapp.png';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

   if(this.state.activeTab === 0){
     return(
       <div className="projects">
        <MDBRow className="card-row">
        <MDBCol sm="12" md="12" lg="4" xl="4" className="card-col">
          <MDBAnimation type="rollIn" delay=".3s">
          <MDBCard className="card hvr-grow" style={{ width: "22rem", height: "25rem" }}>
            <MDBCardImage className="img-fluid form" src={Image} waves />
            <MDBCardBody>
              <MDBCardTitle className="title" >React Form</MDBCardTitle>
              <MDBCardText className="text">
                <p>Simple form that allows you to add a person's name and job title. The list will then appear giving you the ability to delete.</p>
              </MDBCardText>
              <MDBBtn href="https://github.com/ahern8/react-tutorial-characters" target="_blank" color="pink" rounded size="md" className="buttons"><MDBIcon fab icon="github" className="left" /> <strong>Github</strong></MDBBtn>
              <MDBBtn href="https://ahern8.github.io/react-tutorial-characters/" target="_blank" color="pink" rounded size="md" className="buttons">
                 <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
               </MDBBtn>
            </MDBCardBody>
          </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol sm="12" md="12" lg="4" xl="4"  className="card-col">
            <MDBAnimation type="rollIn" delay=".3s">
            <MDBCard className="card hvr-grow" style={{ width: "22rem", height: "25rem" }}>
              <MDBCardImage className="img-fluid weather" src={WeatherImage} waves />
              <MDBCardBody>
                <MDBCardTitle className="title">React Weather App</MDBCardTitle>
                <MDBCardText className="text">
                  <p>A weather app that allows you to search a city and country and will display the current temperature, humidity, and conditions.</p>
                </MDBCardText>
                <MDBBtn href="https://github.com/ahern8/react-weather-app" target="_blank" color="pink" rounded size="md"><MDBIcon fab icon="github" className="left" /> <strong>Github</strong></MDBBtn>
                <MDBBtn href="https://weather-app-portfolio.herokuapp.com/" target="_blank" color="pink" rounded size="md">
                   <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
                 </MDBBtn>
              </MDBCardBody>
            </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol sm="12" md="12" lg="4" xl="4"  className="card-col">
              <MDBAnimation type="rollIn" delay=".3s">
              <MDBCard className="card hvr-grow" style={{ width: "22rem", height: "25rem" }}>
                <MDBCardImage className="img-fluid recipe" src={RecipeImage} waves />
                <MDBCardBody>
                  <MDBCardTitle className="title">React Recipe App</MDBCardTitle>
                  <MDBCardText className="text">
                    <p>A recipe app that allows you to search for an ingredient and obtain recipes containing the ingredient.</p>
                  </MDBCardText>
                  <MDBBtn href="https://github.com/ahern8/react-recipe-app" target="_blank" color="pink" rounded size="md"><MDBIcon fab icon="github" className="left" /> <strong>Github</strong></MDBBtn>
                  <MDBBtn href="https://recipe-app-portfolio.herokuapp.com/" target="_blank" color="pink" rounded size="md">
                     <MDBIcon icon="desktop" className="left" /> <strong>Live Demo</strong>
                   </MDBBtn>
                </MDBCardBody>
              </MDBCard>
                </MDBAnimation>
              </MDBCol>
        </MDBRow>




       </div>
     )
   } else if(this.state.activeTab === 1) {
     return (
       <div></div>
     )
   }
 }


  render() {
    return (
      <div id="Projects">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <MDBAnimation type="slideInDown" delay=".3s">
              <h1 className="h1-responsive font-weight-bold mt-sm-5 contact-me">
                Projects
              </h1>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
        <MDBRow>
        <MDBCol md="3"></MDBCol>
        <MDBCol md="6">
        <MDBAnimation type="slideInDown" delay=".3s">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab className="tabs">React</Tab>
          <Tab className="tabs">Angular</Tab>
        </Tabs>
        </MDBAnimation>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="8" sm="12">
            <div className="content">{this.toggleCategories()}</div>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}


export default Projects;
