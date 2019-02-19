import React, { Component } from "react";
import './Background.css';

class Background extends Component {
  render() {
    return (
      <section id="timeline">

      <div class="tl-item">

        <div class="tl-bg-first"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2017</p>
        </div>

        <div class="tl-content">
          <h1>Baccalauréat ES</h1>
          <p>Obtention du Baccalauréat ES <br/>spécialité <i>Mathématiques</i> <br/>Option <i>Sport</i> <br/>Mention <i>bien</i></p>
        </div>

      </div>

      <div class="tl-item">

        <div class="tl-bg-second"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Depuis 2017</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">DUT Informatique en alternance</h1>
          <p>2ème année de DUT Informatique en alternance.</p>
        </div>

      </div>

      <div class="tl-item">

        <div class="tl-bg-third"></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">Depuis 2017</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Apprentissage en entreprise</h1>
          <p>Intégration chez Métal Déployé Resistor à Montbard. <br/>Entreprise
            du secteur industriel vendant des produits à base de résistances
            électriques.</p>
        </div>

      </div>
    </section>

    );
  }
}

export default Background;
