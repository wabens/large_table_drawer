import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';


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
          <div onClick={this.toggleDrawer}>
            <h1>THE DRAWER IS OPEN</h1>
          </div>
        </Drawer>
    </section>
    );
  }
}

export default TableDrawer;
