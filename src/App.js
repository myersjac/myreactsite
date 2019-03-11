import React, { Component } from 'react';
import logo from './JM_LOGO_Vanilla.svg';
import './App.css';
const ScrollReveal = require('scrollreveal');

class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 class="text1">
            JAKE MYERS
          </h1>

          <h3>
            HI Internet! I'm currently building my site so here's a spinner that will stop once it's done.
          </h3>

          <p>
            Thanks to jake rothman for helping choose my domain name! he's gr8!!
        </p>

        </header>
      </div>
    );
  }
}

export default App;
