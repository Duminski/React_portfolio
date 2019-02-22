import React, { Component } from "react";
import './projects.css';

class Projects extends Component {
  render() {
    return (

      <div id="projects">

        <div class="card">
          <div class="header">
            <h3>Logiciel de cotation de banc de charge</h3>
            <p class="desc">Développement d'un outil de cotation de banc de charge
            en langage VB .NET associé à une base de donnée SQL Server.
            Ce projet est en développement dans le cadre de mon apprentissage
            en entreprise. </p>
            <p>Depuis juin 2018</p>
          </div>
        </div>



        <div class="card">
          <div class="header">
            <h3>Projet démo VB .NET</h3>
            <p class="desc">Afin de découvrir le langage VB .NET, j'ai réalisé un petit projet
            démo. Celui-ci m'a également perfectionné dans le langage SQL et il
            m'a surtout fait découvrir toutes les possibilités qu'offre ce langage.
            <br/><br/>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/Duminski/demo_vbnet'>
            https://github.com/Duminski/demo_vbnet
            </a>
            </p>
            <p>Janvier-Février 2018</p>
          </div>
        </div>



        <div class="card">
          <div class="header">
            <h3>Création d'un site statique</h3>
            <p class="desc">Lors du premier semestre à l'université, nous avons dû développer
            en équipe de 4 un site statique en langage HTML/CSS. Nous avions pour sujet
            un aéroclub fictif. En parallèle des acqis techniques, cela m'a fait
            apprendre la gestion d'une équipe ainsi que l'organisation de travail.
            <br/><br/>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/Duminski/Simple-HTML-CSS-Website-Project'>
            https://github.com/Duminski/Simple-HTML-CSS-Website-Project
            </a>
            </p>
            <p>Septembre-Décembre 2017</p>
          </div>
        </div>

      </div>

    );
  }
}

export default Projects;
