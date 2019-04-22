import React, { Component } from 'react';
import { MultiGrid, AutoSizer } from 'react-virtualized';
import './SmartTable.css'
import 'react-virtualized/styles.css'; // only needs to be imported once
import sort from 'fast-sort'; // to sort columns

const incubatorData = require('../../data.modules/incubatorData')

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
    sort:{
      direction: '',
      column: 0,
      active: false,
    },
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
    if(this.state.sort.direction===''){
      let columnNames = list.shift();
      sort(list).asc(l=>l[column]);
      list.unshift(columnNames)
      console.log(`sorted `, list);
      this.setState({
        sort: {
          direction: 'ASC',
          column,
          active: true,
        }
      })
    }
    else if(this.state.sort.direction==='ASC'){
      let columnNames = list.shift();
      sort(list).desc(l=>l[column]);
      list.unshift(columnNames)
      console.log(`sorted `, list);
      this.setState({
        sort: {
          direction: 'DESC',
          column,
          active: true
        }
      })
    }
    else if(this.state.sort.direction==='DESC'){
      list = listToIndex(incubatorData);
      list.unshift(columnNames)
      this.setState({
        sort: {
          direction: '',
          column: 0,
          active: false,
        }
      })
    }
  }

  componentDidMount(){
    console.log(`column names `, columnNames);
  }
  cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    let cellStyle = 'dataCell';
    // checks position of selected data cell against current rendering cell
    // changes style if selected for highlight effect
    if(columnIndex===this.state.position.column && rowIndex===this.state.position.row){
      cellStyle ='selectCell';
    }

    if(rowIndex===0){ // if columnHead (row 0), render button
      if(this.state.sort.active===true && this.state.sort.column===columnIndex){
        console.log(`in sorted column `, this.state.sort);
        return(
          <div
            key={key}
            style={style}
            className={'headerCell'}
          >
            <button onClick={()=>this.handleSort(columnIndex)}>{this.state.sort.direction}</button>
            {list[rowIndex][columnIndex]}
          </div>
        )
      }
      else{
        return(
          <div
            key={key}
            style={style}
            className={'headerCell'}
          >
            <button onClick={()=>this.handleSort(columnIndex)}></button>
            {list[rowIndex][columnIndex]}
          </div>
        )
      }
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
      <AutoSizer>
      {({ height, width }) => (
        <MultiGrid
          columnCount={list[0].length}
          columnWidth={100}
          height={height}
          rowCount={list.length+1}
          rowHeight={50}
          width={width}
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
      )}
      </AutoSizer>
    )
  }   
}

export default SmartTable;
