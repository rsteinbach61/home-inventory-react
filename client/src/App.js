import React, { Component } from 'react';
import HomesContainer from './containers/HomesContainer';
import Home from './components/homes/Home';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={HomesContainer} />
          <Route exact path="/home/:id" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
