import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="particles-js">
      <div class="count-particles">
      </div>
      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
      
        <div id='test'>
          <h2>HOME</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>

          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>

      </div>
    );
  }
}

export default Home;
