import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Home from './Home.js';
//import Card from './Card.js';
import Navigation from '.src/components/Navigation/Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
registerServiceWorker();
