import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List'
import User from './components/User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <User />
        <List />
      </div>
    );
  }
}

export default App;
