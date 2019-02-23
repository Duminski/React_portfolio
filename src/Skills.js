import React, { Component } from "react";
import './skills.css';

class Skills extends Component {
  render() {
    return (

        <div id="skills">
          <h2>Langues</h2>

          <span class="dot"><img src={require('./assets/img/uk.png')} alt="UK flag"/>Niveau C1</span>
          <span class="dot"><img src={require('./assets/img/spain.png')} alt="SP flag"/>Niveau B2</span>
          <span class="dot"><img src={require('./assets/img/poland.png')} alt="PL flag"/>Niveau A1</span>

          <div class="specify">
            <h2>Langages de programmation</h2>
            <span class="dot"><img src={require('./assets/img/html5.png')} alt="html5"/>
            HTML 5<p id="sum">test</p></span>
            <span class="dot"><img src={require('./assets/img/css-3.png')} alt="css3"/>CSS 3</span>
            <span class="dot"><img src={require('./assets/img/javascript.png')} alt="js"/>Javascript</span>
            <span class="dot"><img src={require('./assets/img/react_js.png')} alt="react"/>React</span>
            <span class="dot"><img src={require('./assets/img/java.png')} alt="java"/>Java</span>
            <span class="dot"><img src={require('./assets/img/php.png')} alt="php"/>PHP 5.3</span>
            <span class="dot"><img src={require('./assets/img/sql.png')} alt="sql"/>T-SQL/PGSQL</span>
            <span class="dot"><img src={require('./assets/img/c_lang.png')} alt="c lang"/>C</span>
            <span class="dot"><img src={require('./assets/img/vb_net.png')} alt="vb net"/>VB .NET</span>
          </div>

          <h2 id="other">Autres</h2>
          <span class="dot"><img src={require('./assets/img/git-logo.png')} alt="git"/>Git</span>
          <span class="dot"><img src={require('./assets/img/linux.png')} alt="linux"/>Linux</span>
          <span class="dot"><img src={require('./assets/img/windows.png')} alt="windows"/>Windows 7/10</span>
          <span class="dot"><img src={require('./assets/img/office.png')} alt="office"/>Office 2010/2016</span>
          <span class="dot"><img src={require('./assets/img/photoshop.png')} alt="photoshop"/>Photoshop CS6</span>

        </div>

    );
  }
}

export default Skills;
