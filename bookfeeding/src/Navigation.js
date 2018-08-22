import React from 'react';


import DrawerToggleButton from './DrawerToggleButton';
import './Navigation.css';
import DropDown from './DropDown';


const navigation = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className= "toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/"> <img src={require('./logo.jpg')} width="250px" /> </a>

      </div>
      <div className="spacer"/>
      <div className="toolbar_navigation-items">
          <DropDown click={props.dropDownButton} />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Our Libraries</a></li>
          <li><a href="/">Who We Are</a></li>
          <li><a href="/">Get Involved</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    </nav>
    </header>

);
export default navigation;