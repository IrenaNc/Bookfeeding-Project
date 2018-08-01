import React, { Component } from 'react';
import Navigation from './Navigation';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState ((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});

  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop />
    }
    return (
      <div style={{height: '100%'}}>
      <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer />
      <Backdrop click={this.backdropClickHandler} />
      <main style={{marginTop:'64px'}}>
        <p> Page content goes here!</p>
      </main>

      </div>
    );
  }
}

export default App;
