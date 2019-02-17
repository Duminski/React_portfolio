import React, { Component } from "react";
import ParticleComponent from "./ParticleComponent";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import Projects from "./Projects";
import Cv from "./Cv";
import Contact from "./Contact";
import './Home.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            top: 0,
            left: 0,
            height: "100vh"
          }}
        >
          <nav>
            <ul className="header">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/background">Parcours</NavLink></li>
              <li><NavLink to="/projects">Projets</NavLink></li>
              <li><NavLink to="/cv">CV</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/background" component={Background}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/cv" component={Cv}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Main;
