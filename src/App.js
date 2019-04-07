import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Enterance from './pages/Enterance';
import Makesure from './pages/Makesure';
import Answer from './pages/Answer';
import Answer2 from './pages/Answer2';
import Answer3 from './pages/Answer3';
import Answer7 from './pages/Answer7';
import Answer4 from './pages/Answer4';
import Answer5 from './pages/Answer5';
import Answer6 from './pages/Answer6';
import Answer8 from './pages/Answer8';
import Answer9 from './pages/Answer9';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Enterance}/>
          <Route path="/makesure" component={Makesure}/>
          <Route path="/answer" component={Answer}/>
          <Route path="/answer2" component={Answer2}/>
          <Route path="/answer3" component={Answer3}/>
          <Route path="/answer4" component={Answer4}/>
          <Route path="/answer5" component={Answer5}/>
          <Route path="/answer6" component={Answer6}/>
          <Route path="/answer7" component={Answer7}/>
          <Route path="/answer8" component={Answer8}/>
          <Route path="/answer9" component={Answer9}/>
        </div>
      </Router>
    );
  }
}

export default App;
