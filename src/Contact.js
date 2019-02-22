import React, { Component } from "react";
import './contact.css';
import axios from 'axios';
const API_PATH = 'http://localhost:3000/react-contact-form/api/contact/index.php';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
    .then(result => {
      this.setState( {
        mailSent: result.data.sent
      })
      console.log(this.state);
    })
    .catch(error => this.setState( { error: error.message } ));
  };

  render() {
    return (

      <div id="contactCv">
        <h3>Contact</h3>
          <div id="cv">
            <p>Voici la <a target="_blank" href={require('./assets/CV.pdf')}>
            version pdf</a> de mon CV si vous souhaitez le consulter.</p>
          </div>

        <div id="center">
          <div class="container">
            <form action="#">
              <label for="fname">Prénom *</label>
              <input type="text" id="fname" name="firstname" placeholder="Votre prénom"
              value={this.state.fname }
              onChange={e => this.setState({ fname: e.target.value })}
              />

              <label for="lname">Nom *</label>
              <input type="text" id="lname" name="lastname" placeholder="Votre nom"
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
              />

              <label for="mail">Mail *</label>
              <input type="text" id="mail" name="email" placeholder="Votre mail"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              />

              <label for="subject">Subject *</label>
              <textarea id="subject" name="subject" placeholder="Write something.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}></textarea>

              <input type="submit" onClick = {e => this.handleFormSubmit(e)} value="Submit" />
              <div>
                {this.state.mailSent  &&
                  <div className="sucsess">Thank you for contcting me.</div>
                }
                {this.state.error  &&
                  <div className="error">Sorry we had some problems.</div>
                }
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Contact;
