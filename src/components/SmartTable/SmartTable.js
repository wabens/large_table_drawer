import React, { Component } from 'react';
//import SmartDataTable from 'react-smart-data-table'
import { MultiGrid } from 'react-virtualized';
import './SmartTable.css'
import 'react-virtualized/styles.css'; // only needs to be imported once

const incubatorData = require('../../data.modules/incubatorData')


// const list = [
//   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
//   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
//   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
//   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125]
// ];



// function cellRenderer ({ columnIndex, key, rowIndex, style }) {
//   return (
//     <div
//       key={key}
//       style={style}
//     >
//       {list[rowIndex][columnIndex]}
//     </div>
//   )  
// }

  function listToIndex (data) {
    let result = [];
    let columnNames = Object.keys(data[0])
    for (let obj of data) {
      let newArray = Object.values(obj);
      result.push(newArray);
    }
    console.log(`listToIndex...`);
    console.log(`column names `, columnNames);
    result.unshift(columnNames);
    return result
  };

  let list = listToIndex(incubatorData);

class SmartTable extends Component {
  
  handleDataClick = (row, column) => {
    console.log(`position `, row, column);
    
  }

  componentDidMount(){
    console.log(`incubator data `, incubatorData);
  }
  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    
    return (
      <div
        key={key}
        style={style}
        className={'dataCell'}
        onClick={()=>this.handleDataClick(rowIndex, columnIndex)}
      >
          {list[rowIndex][columnIndex]}
      </div>
    )  
  }

  render() {
    const columnNames = Object.keys(incubatorData[0]);
    
    // const list = [
    //   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
    //   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
    //   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
    //   ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125]
    // ];
    return (
      <MultiGrid
      columnCount={list[0].length}
      columnWidth={100}
      height={1000}
      rowCount={list.length}
      rowHeight={50}
      width={1000}
      fixedColumnCount={1}
      fixedRowCount={1}
      cellRenderer={this.cellRenderer}

      />
    )
  }
}

export default SmartTable;
