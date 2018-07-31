import React, { Component } from 'react';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <main style={{marginTop:'64p'}}>
        <p> Page content goes here!</p>
      </main>

      </div>
    );
  }
}

export default App;
