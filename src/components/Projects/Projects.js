import React from "react";
import "./Projects.css";
import Image from "./react-basics.png";
import WeatherImage from "./weatherapp.png";
import RecipeImage from "./recipeapp.png";
import MoviesImage from "./moviedbapp.png";
import CrwnImage from "./crwn.png";
import NatoursImage from "./natours.png";
import NexterImage from "./nexter.png";
import TrilloImage from "./trillo.png";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBAnimation
} from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon
} from "mdbreact";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects">
          <MDBRow className="card-row">
            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid natours"
                    src={NatoursImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">Natours</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A sample nature tour site that showcases various
                        advanced CSS and SASS features.<br></br>
                        <br></br>
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/natours"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                      className="buttons"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://ahern8.github.io/natours/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                      className="buttons"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid nexter"
                    src={NexterImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">Nexter</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A sample real estate site that showcases various
                        advanced CSS and SASS features.<br></br>
                        <br></br>
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/nexter"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://ahern8.github.io/nexter/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol
              sm="12"
              md="12"
              lg="12"
              xl="4"
              className="justify-content-center card-col"
            >
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid trillo"
                    src={TrilloImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">Trillo</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A sample hotel booking site that showcases various
                        advanced CSS and SASS features.<br></br>
                        <br></br>
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/trillo"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://ahern8.github.io/trillo/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects">
          <MDBRow className="card-row">
            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage className="img-fluid form" src={Image} waves />
                  <MDBCardBody>
                    <MDBCardTitle className="title">React Form</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        Simple form that allows you to add a person's name and
                        job title. The list will then appear giving you the
                        ability to delete.
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/react-tutorial-characters"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                      className="buttons"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://ahern8.github.io/react-tutorial-characters/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                      className="buttons"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid weather"
                    src={WeatherImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">Weather App</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A weather app that allows you to search a city and
                        country and will display the current temperature,
                        humidity, and conditions.
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/react-weather-app"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://weather-app-portfolio.herokuapp.com/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol
              sm="12"
              md="12"
              lg="12"
              xl="4"
              className="justify-content-center card-col"
            >
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid recipe"
                    src={RecipeImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">Recipe App</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A recipe app that allows you to search for an ingredient
                        and obtain recipes containing the ingredient.
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/react-recipe-app"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://recipe-app-portfolio.herokuapp.com/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="card-row second-row">
            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid movies"
                    src={MoviesImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">
                      Movies Searcher App
                    </MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        A movie searcher app where you can type a title of a
                        movie and matching results will display from The Movie
                        Database.
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/react-moviedb-search"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://movedb-search-portfolio.herokuapp.com/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol sm="12" md="12" lg="12" xl="4" className="card-col">
              <MDBAnimation type="fadeIn" delay=".3s">
                <MDBCard
                  className="card hvr-grow"
                  style={{ width: "22rem", height: "25rem" }}
                >
                  <MDBCardImage
                    className="img-fluid crwn"
                    src={CrwnImage}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="title">CRWN Clothing</MDBCardTitle>
                    <MDBCardText className="text">
                      <p>
                        An ecommerce store for clothing that allows user to
                        create an account or sign in with existing account and
                        checkout their items.
                      </p>
                    </MDBCardText>
                    <MDBBtn
                      href="https://github.com/ahern8/crwn-clothing"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon fab icon="github" className="left" />{" "}
                      <strong>Github</strong>
                    </MDBBtn>
                    <MDBBtn
                      href="https://crwn-clothing-site.herokuapp.com/"
                      target="_blank"
                      color="pink"
                      rounded
                      size="md"
                    >
                      <MDBIcon icon="desktop" className="left" />{" "}
                      <strong>Live Demo</strong>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </div>
      );
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
                <Tabs
                  activeTab={this.state.activeTab}
                  onChange={tabId => this.setState({ activeTab: tabId })}
                  ripple
                >
                  <Tab className="tabs">HTML/CSS</Tab>
                  <Tab className="tabs">React</Tab>
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
