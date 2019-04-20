import React, { Component } from 'react';
import './App.css';
import SmartTable from '../SmartTable/SmartTable'
const incubatorData = require('../../data.modules/incubatorData')



class App extends Component {

  componentDidMount(){
    console.log(`incubator data `, incubatorData);
  }
  render() {


    return (
      <div className="App">
        <SmartTable/>
      </div>
    );
  }
}

export default App;
