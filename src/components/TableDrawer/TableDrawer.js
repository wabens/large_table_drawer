import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';


class TableDrawer extends Component {
  render() {
    return (
    <section>
        <Drawer anchor="bottom" open={this.state.open} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
    </section>
    );
  }
}

export default TableDrawer;
