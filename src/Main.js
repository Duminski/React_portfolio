import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Background from "./Background";
import Projects from "./Projects";
import Contact from "./Contact";

import './Home.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div id='main'>
          <nav>
            <ul className="header">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/about">Présentation</NavLink></li>
              <li><NavLink to="/background">Parcours</NavLink></li>
              <li><NavLink to="/projects">Projets</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/background" component={Background}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
