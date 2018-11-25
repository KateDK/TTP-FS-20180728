import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, AuthForm, Portfolio } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AuthForm />
        <Portfolio />
      </div>
    );
  }
}

export default App;
