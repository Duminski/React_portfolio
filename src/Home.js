import React, { Component } from "react";

class Home extends Component {
  render() {
    return (

        <div id='cont-home'>
          <h1>Laura Dumin</h1>
          <h1>Développeur informatique</h1>

          <p class="desc">Je suis une étudiante/apprentie en DUT informatique à la recherche
          d'une alternance pour 3 ans en école d'ingénieurs plutôt dans le
          domaine de la sécurité informatique ainsi que dans le spatial.<br/><br/>
          J'ai acquis beaucoup de connaissances dans le domaine de l'informatique avec ces
          deux années ainsi que les compétences de communication, développées lors des
          périodes entreprise.</p>
          <span class="dot"><br/><img src={require('./assets/img/driving-license.png')} alt="driving license"/>Permis B</span>
          <span class="dot"><br/><img src={require('./assets/img/diploma.png')} alt="clesB2"/>CLES B2</span>
        </div>

    );
  }
}

export default Home;
