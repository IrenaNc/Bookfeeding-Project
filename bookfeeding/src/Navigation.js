import React from 'react';
import '/Navigation.css';

const Navigation = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo"><a href="/"> The Logo </a></div>
      <div className="toolbar_navigation_items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Who Are We?</a></li>
          <li><a href="/">News</a></li>
          <li><a href="/">Our Libraries</a></li>
          <li><a href="/">Help Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
    </nav>
    </header>

);
export default Navigation;