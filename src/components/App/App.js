import React, { Component } from 'react';
// import './App.css';
import SmartTable from '../SmartTable/SmartTable'
import SimpleExample from '../SimpleExample/SimpleExample'
const incubatorData = require('../../data.modules/incubatorData')



class App extends Component {

  componentDidMount(){
    // console.log(`incubator data `, incubatorData);
  }
  render() {


    return (
      // <SimpleExample/>
      <SmartTable/>
    
    );
  }
}

export default App;
