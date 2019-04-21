import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import SmartTable from '../SmartTable/SmartTable';
import './TableDrawer.css';


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
          <div className={'drawerDiv'}>
            <button onClick={this.toggleDrawer}>CLOSE</button>
            <SmartTable/>
          </div>
        </Drawer>
    </section>
    );
  }
}

export default TableDrawer;
