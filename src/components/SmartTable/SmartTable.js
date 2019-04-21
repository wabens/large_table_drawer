import React, { Component } from 'react';
import { MultiGrid } from 'react-virtualized';
import './SmartTable.css'
import 'react-virtualized/styles.css'; // only needs to be imported once
import sort from 'fast-sort'; // to sort columns

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
    console.log(`data `, data);
    
    for (let obj of data) {
      let newArray = Object.values(obj);
      result.push(newArray);
    }
    console.log(`listToIndex...`, result);
    return result
  };

  // in actual implementaiton this will be in redux state or passed as props
  let toSort = listToIndex(incubatorData)
  let list = listToIndex(incubatorData); 
  const columnNames = Object.keys(incubatorData[0]);
  list.unshift(columnNames);

class SmartTable extends Component {
  
  handleDataClick = (row, column) => {
    console.log(`position `, row, column);
    let columnNames = list.shift();
    sort(list).asc(l=>l[column]);
    list.unshift(columnNames)
    console.log(`sorted `, list);

    
    
  }

  componentDidMount(){
    console.log(`column names `, columnNames);
  }
  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    // console.log(`list `, list);
    // console.log(`columnNames `, columnNames);
    
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
      rowCount={list.length+1}
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
