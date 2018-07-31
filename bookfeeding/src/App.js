import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <main style={{marginTop='64px'}}>
        <p> Page content goes here!</p>
      </main>

      </div>
    );
  }
}

export default App;
