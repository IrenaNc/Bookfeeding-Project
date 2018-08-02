import React from 'react';

import "./SideDrawer.css";

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Who Are We?</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">Our Libraries</a></li>
          <li><a href="/">Help Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
    </nav>);
    };


export default sideDrawer;