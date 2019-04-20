import React, { Component } from 'react';
//import SmartDataTable from 'react-smart-data-table'
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const incubatorData = require('../../data.modules/incubatorData')




class SmartTable extends Component {

  componentDidMount(){
    console.log(`incubator data `, incubatorData);
  }

  // columnsToRender =(array) => {
  //   const columnNames = Object.keys(array[0]);
  //   console.log(`keys `, columnNames);
    
  // }

  render() {
    const columnNames = Object.keys(incubatorData[0]);
    

    return (
      // <div>
      //   <AutoSizer>
      //     {({ height, width }) => (
          <Table
            height={1000}
            width={1000}
            headerHeight={30}
            rowCount={incubatorData.length}
            rowGetter={({ index }) => incubatorData[index]}
            rowHeight={30}
          >
          {columnNames.map(key => 
            <Column

              label= {key}
              dataKey={key}
              width={100}
            /> 
          )}

          

          </Table>
        // )}
        // </AutoSizer>

      /* </div> */
    );
  }
}

export default SmartTable;
