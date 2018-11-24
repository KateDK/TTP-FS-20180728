import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, AuthForm } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AuthForm />
      </div>
    );
  }
}

export default App;
