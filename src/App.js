import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Landing from './components/landingPage.js';
import Main from './components/main';
import About from './components/aboutme';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Alex Hernandez" scroll>
            <Navigation>
                <Link className="link" to="/">Intro</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Alex Hernandez">
            <Navigation>
                <Link to="/">Intro</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
      </Layout>
      </div>

    );
  }
}

export default App;
