
import React from 'react';
import ReactDom from 'react-dom';

import './style/app.scss';
import { say, SQUIRREL } from 'cowsay';
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

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <p>Copyright &copy; PDK 2018</p>
      </footer>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.cowsay = this.cowsay.bind(this);

    this.state = {
      content:
        say({
          text: 'Click for me to say gibberish',
          cow: ''
        })
    }
  }

  //add methods here

  cowsay() {
    let newContent = { content: say({ 
      text: `${faker.lorem.sentence(15)}`}) };
    this.setState(newContent);
  }



  render() {
    return (
      <div>
        <Header />
        <pre>{this.state.content}</pre>
        <button onClick={this.cowsay} id="fake-Txt">Click me!</button>
        <br></br>
        <br></br>
        <h3>Change animal?</h3>
        <select value={this.state.content.cow} onChange={this.animal}>
          <option value="cow">Cow</option>
          <option value="squirrel">Squirrel</option>
        </select>
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));