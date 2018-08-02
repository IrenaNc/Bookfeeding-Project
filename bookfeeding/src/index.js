import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './Home.js';
//import Card from './Card.js';
//import Navigation from '.Navigation.js';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
