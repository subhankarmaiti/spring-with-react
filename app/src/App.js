import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
export default class App extends Component {
  state = {
    message: '',
  };
  componentDidMount() {
    axios.get('/api/hello').then(({ data }) => {
      this.setState({ message: data });
    });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}
