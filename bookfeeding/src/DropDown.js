import React, { Component } from 'react';

import './DropDown.css'

class DropDown extends Component {
   render() {
       return(

       // const dropDown = props => (
        //    <button className="dropdown-button" onClick={props.click}>
         //      <div className= "dropDown" />
        
            
            <ul className="nav__submenu">
            <li className="nav__submenu-item ">
              <a>Our Company</a>
            </li>
            <li className="nav__submenu-item ">
              <a>Our Team</a>
            </li>
            <li className="nav__submenu-item ">
              <a>Our Portfolio</a>
            </li>
          </ul>
        


        
       )
   }
}


export default DropDown; 


