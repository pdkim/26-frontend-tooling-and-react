
import React from 'react';
import ReactDom from 'react-dom';

import './style/app.scss';
import {say} from 'cowsay';
const faker = require('faker');

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.cowsay = this.cowsay.bind(this);

    this.state = {
      cowsay: {
        cow: '',
        text: '',
        eyes: 'oO',
        tongue: 'U'
      }
    };
  }

  //add methods here

  cowsay() {
    console.log(say({text: `${faker.name.findName()}`}));
  }

  render() {
    return (
      <div>
        <Header />
        <p id="cowsay">Cowsay?!</p>
        <button>Click me!</button>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));