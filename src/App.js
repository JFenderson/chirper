import React, { Component } from 'react';
// import Input from './components/Input';
import List from './components/List'
// import User from './components/User'
import './App.css';
import Add from './components/Add'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      chirps: [
        {
          id:3342,
          user: "carl",
          message: "hi"
        },
        {
          id:3424,
          user: "frank",
          message: "yo"
        },
        {
          id:5656,
          user: "ian",
          message: "bye"
        }
      ]
    };
  }

  handleAddChirp = () => {
    this.setState({
      chirps:[...this.state.chirps, this.state.newChirp],
      newChirp: {}
    })
  };

  handleInputChange = (chirp) => {
    this.setState({
      id:Math.floor(Math.random()* 3543),
      message: chirp,
      user: 'penny'
    })
  }

  render() {
    return (
      <div className="container">
      <Add onAdd={this.handleAddChirp} onChange={this.handleInputChange}/>
        <List list={this.state.chirps}/>
      </div>
    )
  }
}

export default App;
