import React, { Component } from 'react';
import HomesContainer from './containers/HomesContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomesContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
