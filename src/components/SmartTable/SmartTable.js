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
  let list = listToIndex(incubatorData); 
  const columnNames = Object.keys(incubatorData[0]);
  list.unshift(columnNames);

class SmartTable extends Component {

  state={
    sort: '',
    position:{
      row: null,
      column: null,
    }
  }
  
  handleDataClick = (row, column) => {    
    console.log(`position `, row, column);
    this.setState({
      position:{
        row,
        column,
      }
    })    
  }
  handleSort = (column) =>{
    if(this.state.sort===''){
      let columnNames = list.shift();
      sort(list).asc(l=>l[column]);
      list.unshift(columnNames)
      console.log(`sorted `, list);
      this.setState({
        sort: 'ASC'
      })
    }
    else if(this.state.sort==='ASC'){
      let columnNames = list.shift();
      sort(list).desc(l=>l[column]);
      list.unshift(columnNames)
      console.log(`sorted `, list);
      this.setState({
        sort: 'DESC'
      })
    }
    else if(this.state.sort==='DESC'){
      list = listToIndex(incubatorData);
      this.setState({
        sort: ''
      })
    }
  }

  componentDidMount(){
    console.log(`column names `, columnNames);
  }
  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    let cellStyle = 'dataCell';
    if(columnIndex===this.state.position.column && rowIndex===this.state.position.row){
      cellStyle ='selectCell';
    }

    if(rowIndex===0){ // if columnHead (row 0), render button
      return(
        <div
          key={key}
          style={style}
          className={'headerCell'}
          onClick={()=>this.handleDataClick(rowIndex, columnIndex)}
        >
          <button onClick={()=>this.handleSort(columnIndex)}>{this.state.sort}</button>
          {list[rowIndex][columnIndex]}
        </div>
      )
    }else{  // normal data cell
      return (
        <div
          key={key}
          style={style}
          className={cellStyle}
          onClick={()=>this.handleDataClick(rowIndex, columnIndex)}
        >
          {list[rowIndex][columnIndex]}
        </div>
      )  
    }
  }

  render() {
    
    console.log(`state position `, this.state.position);

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
        styleTopRightGrid={{
          border: 'solid blue 1px',
        }}
        styleBottomLeftGrid={{
          border: 'solid blue 1px',
        }}
      />
    )
  }
}

export default SmartTable;
