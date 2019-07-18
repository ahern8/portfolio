import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
  MDBAnimation
} from "mdbreact";
import "./Intro.css";




class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  state = {
    activeItemClassicTabs2: "1",
  }

  toggleClassicTabs2 = tab => () => {
    if (this.state.activeItemClassicTabs2 !== tab) {
    this.setState({
      activeItemClassicTabs2: tab
    });
    }
  }

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5"
              >
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


      </div>
    );
  }
}

export default AppPage;
