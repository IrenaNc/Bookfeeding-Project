import React, { Component } from 'react';

import './Dropdown/DropDown.css'


const dropDown = props => (
    <button className="dropdown-button" onClick={props.click}>
       <div className= "dropDown" />
    </button>



 /*   <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Mission Statement</a></li>
          <li><a href="/">History</a></li>
          <li><a href="/">Team</a></li>
          <li><a href="/">Partners</a></li>
          <li><a href="/">Financials</a></li>

    </ul>
    
    </button>
     </div> */
);

export default dropDown; 


