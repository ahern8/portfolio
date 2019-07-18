import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./App.css";
import Main from './Main';
import Header from './components/Header/Header';



class App extends Component {


  render() {
   return (
     <div>
      <Header />
      <Main />
    </div>



    );
  }
}

export default App;
