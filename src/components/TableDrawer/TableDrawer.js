import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import SmartTable from '../SmartTable/SmartTable'


class TableDrawer extends Component {
  state= {
    open: false,
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
    <section>
        <button onClick={this.toggleDrawer}>OPEN</button>
        <Drawer anchor="bottom" open={this.state.open} >
          <div>
            <button onClick={this.toggleDrawer}>CLOSE</button>
            <SmartTable/>
          </div>
        </Drawer>
    </section>
    );
  }
}

export default TableDrawer;
