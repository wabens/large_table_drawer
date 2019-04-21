import { MultiGrid } from 'react-virtualized'
import React, { Component } from 'react';
import 'react-virtualized/styles.css'; // only needs to be imported once


const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125],
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125]
];



function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )  
}

class SimpleExample extends Component{

render () {
  return (
    <MultiGrid
      cellRenderer={cellRenderer}
      columnWidth={75}
      columnCount={list[0].length}
      fixedColumnCount={2}
      fixedRowCount={1}
      height={300}
      rowHeight={40}
      rowCount={list.length}
      width={100}
    />
  )
}

}

export default SimpleExample