import React, { Component } from 'react';
import HomesContainer from './containers/HomesContainer';
import RoomsContainer from './containers/RoomsContainer'

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
          <Route exact path="/home/:id" component={RoomsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
