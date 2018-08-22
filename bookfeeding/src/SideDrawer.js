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
          <li><a href="/">Our Libraries</a></li>
          <li><a href="/">Who We Are</a></li>
          <li><a href="/">Get Involved</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
    </nav>);
    };


export default sideDrawer;