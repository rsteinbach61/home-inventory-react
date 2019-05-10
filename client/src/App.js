import React, { Component } from 'react';
import HomesContainer from './containers/HomesContainer';
import RoomsContainer from './containers/RoomsContainer';
import ItemsContainer from './containers/ItemsContainer';
import ItemEditContainer from './containers/ItemEditContainer';
import NavBar from './components/NavBar';
//import ItemEdit from './components/items/ItemEdit';
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
            {/*Routes*/}
            <Route exact path="/" component={HomesContainer} />
            <Route exact path="/home/:id" component={RoomsContainer} />
            <Route exact path="/room/:id" component={ItemsContainer} />
            <Route exact path="/item/:id" component={ItemContainer} />
            <Route exact path="/item/:id/edit" component={ItemEditContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
