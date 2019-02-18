import React, { Component } from "react";
import './Background.css';

class Background extends Component {
  render() {
    return (
      <section id="timeline">

      <div class="tl-item">

        <div class="tl-bg" style={{backgroundImage: "url('https://placeimg.com/801/801/nature')"}}></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2017</p>
        </div>

        <div class="tl-content">
          <h1>Baccalauréat ES</h1>
          <p>Obtention du Baccalauréat ES <br/>spécialité <i>Mathématiques</i> <br/>Option <i>Sport</i> <br/>Mention <i>bien</i></p>
        </div>

      </div>

      <div class="tl-item">

        <div class="tl-bg" style={{backgroundImage: "url('https://placeimg.com/802/802/nature')"}}></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2013</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
          <p>Morbi sed nisl et arcu.</p>
        </div>

      </div>

      <div class="tl-item">

        <div class="tl-bg" style={{backgroundImage: "url('https://placeimg.com/803/803/nature')"}}></div>

        <div class="tl-year">
          <p class="f2 heading--sanSerif">2014</p>
        </div>

        <div class="tl-content">
          <h1 class="f3 text--accent ttu">Phasellus mauris elit</h1>
          <p>Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
        </div>

      </div>
    </section>

    );
  }
}

export default Background;
