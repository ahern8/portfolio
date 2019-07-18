import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/About" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  </main>
)

export default Main;
