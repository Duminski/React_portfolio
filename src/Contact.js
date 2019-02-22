import React, { Component } from "react";
import './contact.css';

class Contact extends Component {

  render() {
    return (

      <div id="contactCv">
        <h3>Contact</h3>
          <div id="cv">
            <p>Voici la <a target="_blank" rel="noopener noreferrer" href={require('./assets/CV.pdf')}>
            version pdf</a> de mon CV si vous souhaitez le consulter.</p>
          </div>

        <div id="center">
          <div class="container">
            <form action="#">
              <label for="fname">Prénom *</label>
              <input type="text" id="fname" name="firstname" placeholder="Votre prénom"
              />

              <label for="lname">Nom *</label>
              <input type="text" id="lname" name="lastname" placeholder="Votre nom"
              />

              <label for="mail">Mail *</label>
              <input type="text" id="mail" name="email" placeholder="Votre mail"
              />

              <label for="subject">Subject *</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Contact;
