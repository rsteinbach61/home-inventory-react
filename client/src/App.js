import React, { Component } from 'react';
import HomesContainer from './containers/HomesContainer';
import RoomsContainer from './containers/RoomsContainer';
import ItemsContainer from './containers/ItemsContainer';
import NavBar from './components/NavBar';
import ItemContainer from './containers/ItemContainer';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {


  render() {

    return (
      <Router>
        <div className="App">

          <div id="container">
            <div><NavBar/></div>

            <Route exact path="/" component={HomesContainer} />
            <Route exact path="/home/:id" component={RoomsContainer} />
            <Route exact path="/room/:id" component={ItemsContainer} />
            <Route exact path="/item/:id" component={ItemContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
