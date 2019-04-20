import React, { Component } from 'react';
import './App.css';
const incubatorData = require('../../data.modules/incubatorData')



class App extends Component {

  componentDidMount(){
    console.log(`incubator data `, incubatorData);
  }
  render() {


    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
