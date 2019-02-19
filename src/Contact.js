import React, { Component } from "react";
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="cv">
        <h2>CV</h2>
        <p>Voici la <a target="_blank" href="./assets/img/CV.png" download>version png</a> de mon CV si vous souhaitez le consulter.</p>
      </div>
    );
  }
}

export default Contact;
