import React, { Component } from "react";
import ParticleComponent from "./ParticleComponent";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Background from "./Background";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import './Home.css';

class Main extends Component {
  render() {
    return (

      /*  <div
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
        >*/
      <HashRouter>
        <div>
          <nav>
            <ul className="navbar">
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/background">Parcours</NavLink></li>
              <li><NavLink to="/skills">Compétences</NavLink></li>
              <li><NavLink to="/projects">Projets</NavLink></li>
              <li><NavLink to="/contact">CV et contact</NavLink></li>
            </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/background" component={Background}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
