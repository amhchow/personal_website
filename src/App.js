import React from 'react';
import Homepage from './components/Homepage';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
         <div className="App">
         <Switch>
           <Route path="/Homepage" component={Homepage}/>
           <Route path="/About" component={About}/>
           <Route path="/Experience" component={Experience}/>
          </Switch>
        </div>
      </Router>
    );
  }

  }
  

export default App;
