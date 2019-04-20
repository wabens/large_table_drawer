import React, { Component } from 'react';
//import SmartDataTable from 'react-smart-data-table'
import { Column, Table, Autosizer } from 'react-virtualized';

const incubatorData = require('../../data.modules/incubatorData')



class SmartTable extends Component {

  componentDidMount(){
    console.log(`incubator data `, incubatorData);
  }

  columnsToRender =() => {
    
  }

  render() {

    

    return (
      <div className={tableBlock}>
        <AutoSizer>
          {({ height, width }) => (
          <Table
            height={height}
            width={width}
            headerHeight={30}
            rowCount={incubatorData.length}
            rowGetter={({ index }) => incubatorData[index]}
            rowHeight={30}
          >

          </Table>
        )}
        </AutoSizer>

      </div>
    );
  }
}

export default SmartTable;
